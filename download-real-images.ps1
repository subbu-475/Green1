# PowerShell script to download relevant real images for GBAC website
# Uses pollitionations.ai to generate relevant images via URL

$imagesDir = "public\images"

# Create directory if it doesn't exist
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

# Define images to download with detailed prompts
# We add specific seeds or randomizers if needed, but the prompt itself usually generates a unique image per call if not cached, 
# or we can add a random seed param if supported. Pollinations usually returns a fresh image or valid cached one.
# We'll add &nologo=true (if supported) or just use the prompt.
# We'll use encoded spaces (%20) in the prompt for safety.

$images = @(
    @{name="hero-1.jpg"; prompt="modern%20sustainable%20green%20building%20facade%20vertical%20gardens%20photorealistic%20architectural%20photography%204k"},
    @{name="hero-2.jpg"; prompt="eco%20friendly%20corporate%20office%20building%20exterior%20with%20trees%20and%20glass%20daylight%20photorealistic"},
    @{name="hero-3.jpg"; prompt="futuristic%20green%20skyscraper%20tower%20with%20plants%20growing%20on%20sides%20blue%20sky%20photorealistic"},
    @{name="about-building.jpg"; prompt="low%20angle%20view%20modern%20corporate%20sustainable%20building%20glass%20and%20wood%20facade%20photorealistic"},
    @{name="event-congress.jpg"; prompt="wide%20shot%20professional%20business%20conference%20audience%20listening%20to%20speaker%20on%20stage%20bright%20lighting"},
    @{name="project-1.jpg"; prompt="modern%20sustainable%20residential%20apartment%20complex%20with%20balcony%20gardens%20exterior%20shot"},
    @{name="project-2.jpg"; prompt="modern%20glass%20office%20building%20LEED%20certified%20architecture%20sunny%20day"},
    @{name="project-3.jpg"; prompt="university%20campus%20green%20building%20modern%20architecture%20students%20walking%20outside"},
    @{name="project-4.jpg"; prompt="modern%20hospital%20building%20exterior%20sustainable%20design%20healing%20garden%20entrance"}
)

Write-Host "Downloading relevant images..." -ForegroundColor Green

foreach ($img in $images) {
    # Generate random seed to ensure variety even if re-run, although simple prompt usually works.
    $seed = Get-Random -Minimum 1000 -Maximum 99999
    $url = "https://image.pollinations.ai/prompt/$($img.prompt)?width=1920&height=1080&seed=$seed&nologo=true"
    $outputPath = Join-Path $imagesDir $img.name
    
    try {
        Write-Host "Downloading $($img.name) from Pollinations..." -ForegroundColor Cyan
        # Use huge timeout as generation might take a few seconds
        Invoke-WebRequest -Uri $url -OutFile $outputPath -TimeoutSec 60
        Write-Host "Downloaded $($img.name)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($img.name): $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "All relevant images downloaded to $imagesDir" -ForegroundColor Green
