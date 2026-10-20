"""Rebuild private listening-bank excerpts from explicitly supplied local media.

Only MP3 packet-copy editing is performed. No source audio is downloaded.
The JSON specification contains source filenames and time ranges, not scripts.
No public redistribution or paid use permission is established by this utility.
"""
import argparse
import hashlib
import importlib.util
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('audio_util', ROOT / 'scripts/cambridge-audio-build.py')
util = importlib.util.module_from_spec(spec)
spec.loader.exec_module(util)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-root', required=True, type=Path)
    parser.add_argument('--ffmpeg', default=shutil.which('ffmpeg'), type=Path)
    args = parser.parse_args()
    if not args.ffmpeg or not args.ffmpeg.is_file() or not args.source_root.is_dir():
        raise ValueError('Existing source folder and FFmpeg executable are required.')
    clips = json.loads((ROOT / 'docs/large-listening-audio-spec.json').read_text(encoding='utf-8'))['clips']
    out = ROOT / 'dist/listening-bank'; out.mkdir(parents=True, exist_ok=True)
    prior_path = ROOT / 'docs/large-listening-audio-manifest.json'
    previous = json.loads(prior_path.read_text(encoding='utf-8')) if prior_path.exists() else {}
    entries = []
    for clip in clips:
        source = args.source_root / clip['sourceFilename']
        destination = out / (clip['id'] + '.mp3')
        if not source.is_file():
            raise FileNotFoundError(source)
        if util.digest(source) != clip.get('sourceSha256'):
            raise ValueError('Source bytes do not match the reviewed source. A fresh transcript/boundary review is required: ' + clip['sourceFilename'])
        util.run(args.ffmpeg, ['-y', '-ss', str(clip['requestedSourceStartSeconds']), '-i', str(source),
                              '-t', str(clip['requestedSourceEndSeconds'] - clip['requestedSourceStartSeconds']),
                              '-map', '0:a:0', '-vn', '-c:a', 'copy', str(destination)])
        measurement = util.analyse(args.ffmpeg, destination)
        if abs(measurement['decodedDurationSeconds'] - (clip['requestedSourceEndSeconds'] - clip['requestedSourceStartSeconds'])) > 0.2:
            raise ValueError('Unexpected excerpt duration: ' + clip['id'])
        entries.append({**clip, 'src': 'listening-bank/' + destination.name,
                        'sha256': util.digest(destination), 'sourceSha256': util.digest(source),
                        'bytes': destination.stat().st_size, 'durationSeconds': measurement['decodedDurationSeconds'],
                        'measurements': measurement,
                        'processing': 'MP3 audio packet copy; no re-encoding, synthesis, speed or pitch changes.',
                        'verification': {'automaticAlignment': 'local_word_times_compared_with_supplied_transcript',
                                         'humanPerceptualReview': 'not_performed', 'browserDecode': 'pending'}})
        old = next((entry for entry in previous.get('clips', []) if entry['id'] == clip['id']), None)
        if old and all(old.get(key) == entries[-1].get(key) for key in ['sha256', 'sourceSha256', 'requestedSourceStartSeconds', 'requestedSourceEndSeconds']):
            for key in ['verification', 'answerEvidence']:
                if key in old:
                    entries[-1][key] = old[key]
        print(json.dumps({'id': clip['id'], 'seconds': measurement['decodedDurationSeconds']}), flush=True)
    manifest = {'schemaVersion': 1, 'status': 'private_source_based_uncalibrated_bank',
                'sourceBook': 'User-supplied Cambridge IELTS21-labelled material',
                'sourceTests': [1, 2, 3, 4], 'syntheticSpeechUsed': False,
                'publicRedistributionPermissionEstablished': False, 'paidUsePermissionEstablished': False,
                'publisherAuthenticityIndependentlyVerified': False,
                'timingMethod': 'Local tiny.en automatic word alignment checked against the supplied book transcript. Approximate review navigation, not human perceptual certification.',
                'limitations': ['Original project questions are not publisher-authored questions.',
                               'These questions have no calibrated CEFR or IELTS score interpretation.',
                               'Shared-recording answers are dependent observations.',
                               'Published-recording familiarity and repeat exposure can affect results.',
                               'Supplying local files does not establish public or commercial rights.'],
                'clips': entries}
    text = json.dumps(manifest, indent=2, ensure_ascii=False) + '\n'
    (ROOT / 'docs/large-listening-audio-manifest.json').write_text(text, encoding='utf-8')
    (out / 'audio-manifest.json').write_text(text, encoding='utf-8')
    private = {'sourceRoot': str(args.source_root), 'clips': [{**entry, 'sourceLocation': str(args.source_root / entry['sourceFilename'])} for entry in entries]}
    (ROOT / 'artifacts/cambridge/large-source-audio-manifest.json').write_text(json.dumps(private, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
