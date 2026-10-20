$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$audioManifest = Get-Content -LiteralPath (Join-Path $projectRoot 'artifacts\audio-manifest.json') -Raw -Encoding utf8 | ConvertFrom-Json
Add-Type -AssemblyName System.Speech
$speech = New-Object System.Speech.Synthesis.SpeechSynthesizer
$speech.SelectVoice('Microsoft Zira Desktop')
$speech.Rate = -1
$speech.Volume = 100
try {
  foreach ($item in $audioManifest) {
    $audioOutput = [System.IO.Path]::GetFullPath((Join-Path $projectRoot ('dist\' + $item.file)))
    $audioRoot = [System.IO.Path]::GetFullPath((Join-Path $projectRoot 'dist\audio')) + [System.IO.Path]::DirectorySeparatorChar
    if (-not $audioOutput.StartsWith($audioRoot, [System.StringComparison]::OrdinalIgnoreCase)) { throw 'Audio path is outside the project audio folder.' }
    $speech.SetOutputToWaveFile($audioOutput)
    $speech.Speak([string]$item.text)
    $speech.SetOutputToNull()
    Write-Output ('Generated ' + $item.id)
  }
} finally { $speech.Dispose() }
