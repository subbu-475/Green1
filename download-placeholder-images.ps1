# PowerShell script to download placeholder images for GBAC website
# This uses placeholder.com to generate temporary images

$imagesDir = "public\images"

# Create directory if it doesn't exist
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

# Define images to download with placeholder service
$images = @(
    @{name="hero-1.jpg"; width=1920; height=1080; text="Green+Building+1"},
    @{name="hero-2.jpg"; width=1920; height=1080; text="Green+Building+2"},
    @{name="hero-3.jpg"; width=1920; height=1080; text="Green+Building+3"},
    @{name="about-building.jpg"; width=1600; height=900; text="About+GBAC"},
    @{name="event-congress.jpg"; width=1600; height=900; text="GBAC+Congress"},
    @{name="project-1.jpg"; width=800; height=600; text="Project+1"},
    @{name="project-2.jpg"; width=800; height=600; text="Project+2"},
    @{name="project-3.jpg"; width=800; height=600; text="Project+3"},
    @{name="project-4.jpg"; width=800; height=600; text="Project+4"}
)

Write-Host "Downloading placeholder images..." -ForegroundColor Green

foreach ($img in $images) {
    $width = $img.width
    $height = $img.height
    $text = $img.text
    $url = "https://via.placeholder.com/${width}x${height}/2d5016/ffffff?text=${text}"
    $outputPath = Join-Path $imagesDir $img.name
    
    try {
        Write-Host "Downloading $($img.name)..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Downloaded $($img.name)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($img.name): $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "All placeholder images downloaded to $imagesDir" -ForegroundColor Green
Write-Host "Note: These are temporary placeholders. Replace with actual images from Unsplash/Pexels." -ForegroundColor Yellow
