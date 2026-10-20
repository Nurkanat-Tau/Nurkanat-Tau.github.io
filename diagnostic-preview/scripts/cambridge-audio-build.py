"""Build private excerpts from the user's supplied Cambridge-labelled files.

No synthesis, speed/pitch change, denoising, or re-encoding is performed.
This does not grant publication rights or establish CEFR validity.
"""
import argparse
import array
import hashlib
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import sys

PROJECT = Path(__file__).resolve().parents[1]
DEFAULT_FFMPEG = shutil.which('ffmpeg')
CLIPS = [
    dict(id='c21-t1-sailing', source='C21T1P1.1.mp3', start=117.4, end=268.5,
         title='Sailing courses', pdfPage=98, printedPage=97,
         coverage='Taster purpose; theory plus supervised practice; membership discount and a later decision.'),
    dict(id='c21-t1-makeup', source='C21T1P2.1.mp3', start=76.0, end=215.6,
         title='Starting work as a makeup artist', pdfPage=99, printedPage=98,
         coverage='Experience from unpaid low-budget work; changing reaction to famous actors.'),
    dict(id='c21-t1-resources', source='C21T1P3.2.mp3', start=8.7, end=142.05,
         title='Evaluating study resources', pdfPage=101, printedPage=100,
         coverage='Unsupported lionfish argument; ultimately useful coastal book; one-sided floating-cities podcast.'),
    dict(id='c21-t1-rubber', source='C21T1P4.mp3', start=124.55, end=270.0,
         title='Constraints on natural rubber supply', pdfPage=102, printedPage=101,
         coverage='Long tree growth and planning for demand; difficult but possible recycling.'),
]


def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as file:
        for block in iter(lambda: file.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def run(ffmpeg, args, binary=False):
    result = subprocess.run([str(ffmpeg), '-nostdin', '-hide_banner', *args], capture_output=True)
    stderr = result.stderr.decode('utf-8', errors='replace')
    if result.returncode:
        raise RuntimeError(stderr[-5000:])
    return (result.stdout if binary else result.stdout.decode('utf-8', errors='replace')), stderr


def analyse(ffmpeg, path):
    raw, diagnostic = run(ffmpeg, ['-i', str(path), '-map', '0:a:0', '-vn', '-acodec', 'pcm_s16le', '-f', 's16le', '-'], binary=True)
    audio = re.search(r'Audio: ([^,]+), (\d+) Hz, (stereo|mono)', diagnostic)
    if not audio:
        raise ValueError('Could not read codec/sample format: ' + str(path))
    sample_rate = int(audio.group(2)); channels = 2 if audio.group(3) == 'stereo' else 1
    samples = array.array('h'); samples.frombytes(raw)
    if sys.byteorder != 'little':
        samples.byteswap()
    if not samples or len(samples) % channels:
        raise ValueError('Empty or incomplete PCM frames: ' + str(path))
    peak = max(abs(value) for value in samples)
    rms = math.sqrt(sum(value * value for value in samples) / len(samples))
    clipped = sum(abs(value) >= 32767 for value in samples)
    _, silence_log = run(ffmpeg, ['-i', str(path), '-map', '0:a:0', '-vn', '-af', 'silencedetect=noise=-38dB:d=0.5', '-f', 'null', '-'])
    gaps = [float(value) for value in re.findall(r'silence_duration: ([0-9.]+)', silence_log)]
    return dict(codec=audio.group(1), sampleRateHz=sample_rate, channels=channels,
                decodedFrames=len(samples) // channels, decodedDurationSeconds=round(len(samples) / channels / sample_rate, 6),
                decodedPeakDbfs=round(20 * math.log10(peak / 32768), 3) if peak else None,
                decodedRmsDbfs=round(20 * math.log10(rms / 32768), 3) if rms else None,
                decodedFullScaleSampleCount=clipped,
                longestDetectedSilenceSeconds=round(max(gaps, default=0), 3), decodeSucceeded=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--ffmpeg', type=Path, default=Path(DEFAULT_FFMPEG) if DEFAULT_FFMPEG else None)
    parser.add_argument('--source-root', type=Path, required=True, help='Local folder containing the four supplied C21 Test1 MP3 files; no downloads are performed.')
    args = parser.parse_args()
    if not args.ffmpeg or not args.ffmpeg.is_file() or not args.source_root.is_dir():
        raise ValueError('Provide existing --ffmpeg and --source-root paths.')
    output = PROJECT / 'dist/listening'; output.mkdir(parents=True, exist_ok=True)
    manifest_path = PROJECT / 'artifacts/cambridge/source-audio-manifest.json'
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    previous = json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
    entries = []
    for spec in CLIPS:
        source = args.source_root / spec['source']; destination = output / (spec['id'] + '.mp3')
        if not source.is_file():
            raise FileNotFoundError(source)
        run(args.ffmpeg, ['-y', '-ss', str(spec['start']), '-i', str(source), '-t', str(spec['end'] - spec['start']),
                         '-map', '0:a:0', '-vn', '-c:a', 'copy', str(destination)])
        measurement = analyse(args.ffmpeg, destination)
        if abs(measurement['decodedDurationSeconds'] - (spec['end'] - spec['start'])) > 0.2:
            raise ValueError('Unexpected excerpt duration: ' + spec['id'])
        entries.append(dict(
            id=spec['id'], title=spec['title'], src='listening/' + destination.name,
            durationSeconds=measurement['decodedDurationSeconds'], bytes=destination.stat().st_size,
            sha256=digest(destination), sourceFilename=source.name, sourceSha256=digest(source),
            sourceLocation=str(source), sourceBook='User-supplied Cambridge IELTS 21-labelled material',
            sourcePdfPage=spec['pdfPage'], sourcePrintedPage=spec['printedPage'],
            requestedSourceStartSeconds=spec['start'], requestedSourceEndSeconds=spec['end'],
            boundaryQuantisation='MP3 packet-copy boundaries; decoded duration measured independently. No speed change.',
            contentCoverage=spec['coverage'],
            processing='Audio-stream packet copy only; no speech generation or audio re-encoding.',
            measurements=measurement,
            verification=dict(pdfPageVisuallyInspected=True, sourceFilenameMatchesTestAndPart=True,
                              localAsrAlignment='pending', browserDecode='pending', humanPerceptualReview='not_performed'),
        ))
        prior = next((entry for entry in previous.get('clips', []) if entry['id'] == spec['id']), None)
        if prior and all(prior.get(key) == entries[-1].get(key) for key in ['sha256', 'sourceSha256', 'requestedSourceStartSeconds', 'requestedSourceEndSeconds']):
            # Retain review only for the exact same source and output bytes/bounds.
            entries[-1]['verification'] = prior['verification']
            if 'answerEvidence' in prior:
                entries[-1]['answerEvidence'] = prior['answerEvidence']
        print(json.dumps({key: entries[-1][key] for key in ['id', 'durationSeconds', 'bytes', 'sha256']}), flush=True)
    manifest = dict(schemaVersion=1, status='private_user_supplied_audio_review',
                    use='Private sample practice and review; not a validated or paid diagnostic.',
                    publicRedistributionPermissionEstablished=False, paidUsePermissionEstablished=False,
                    publisherAuthenticityIndependentlyVerified=False,
                    sourceProvenance='Supplied by the user in the Desktop Cambridge folder; content compared with supplied book scripts.',
                    syntheticSpeechUsed=False, originalSourceFilesModified=False,
                    publicRepositoryPolicy='Do not automatically commit these recordings or copied source scripts to a public repository.',
                    limitations=['Transcript alignment and decode checks do not establish human perceptual quality or speaker identity.',
                                 'IELTS source labels and task types are not CEFR calibration for this sample.',
                                 'Ownership of local files does not establish commercial or public redistribution permission.'],
                    clips=entries)
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    public = {key: manifest[key] for key in ['schemaVersion', 'status', 'use', 'publicRedistributionPermissionEstablished', 'paidUsePermissionEstablished', 'publisherAuthenticityIndependentlyVerified', 'syntheticSpeechUsed', 'limitations']}
    public['sourceProvenance'] = 'User-supplied Cambridge IELTS21-labelled recordings, compared with supplied book scripts. No affiliation or endorsement.'
    public['clips'] = [{key: entry[key] for key in ['id', 'title', 'src', 'durationSeconds', 'bytes', 'sha256', 'sourceFilename', 'sourceSha256', 'sourceBook', 'sourcePdfPage', 'sourcePrintedPage', 'requestedSourceStartSeconds', 'requestedSourceEndSeconds', 'boundaryQuantisation', 'answerEvidence', 'processing', 'measurements', 'verification'] if key in entry} for entry in entries]
    text = json.dumps(public, indent=2, ensure_ascii=False) + '\n'
    (PROJECT / 'docs/cambridge-audio-manifest.json').write_text(text, encoding='utf-8')
    (output / 'audio-manifest.json').write_text(text, encoding='utf-8')


if __name__ == '__main__':
    main()
