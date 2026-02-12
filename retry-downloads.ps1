# PowerShell script to retry failed image downloads for GBAC

$imagesDir = "public\images"

# Define only the images that need retrying
$images = @(
    @{name="hero-1.jpg"; prompt="modern%20sustainable%20green%20building%20facade%20vertical%20gardens%20photorealistic%20architectural%20photography%204k"},
    @{name="hero-2.jpg"; prompt="eco%20friendly%20corporate%20office%20building%20exterior%20with%20trees%20and%20glass%20daylight%20photorealistic"}
)

Write-Host "Retrying specific image downloads..." -ForegroundColor Green

foreach ($img in $images) {
    # Generate random seed
    $seed = Get-Random -Minimum 1000 -Maximum 99999
    $url = "https://image.pollinations.ai/prompt/$($img.prompt)?width=1920&height=1080&seed=$seed&nologo=true"
    $outputPath = Join-Path $imagesDir $img.name
    
    try {
        Write-Host "Downloading $($img.name)..." -ForegroundColor Cyan
        # Increased timeout to 120 seconds
        Invoke-WebRequest -Uri $url -OutFile $outputPath -TimeoutSec 120
        Write-Host "Downloaded $($img.name)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($img.name)" -ForegroundColor Red
        Write-Host $_ -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Retry complete." -ForegroundColor Green
