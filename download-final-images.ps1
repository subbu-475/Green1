# PowerShell script to download specific real stock images using curl
$imagesDir = "public\images"

# Create directory
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

$images = @(
    @{name="hero-1.jpg"; id="photo-1518005052304-a37d1885b5d1"},
    @{name="hero-2.jpg"; id="photo-1523217582562-09d0def993a6"},
    @{name="hero-3.jpg"; id="photo-1486406146926-c627a92ad1ab"},
    @{name="about-building.jpg"; id="photo-1486325212027-8081e485255e"},
    @{name="event-congress.jpg"; id="photo-1515187029135-18ee286d815b"},
    @{name="project-1.jpg"; id="photo-1448630360428-65456885c650"},
    @{name="project-2.jpg"; id="photo-1464938050520-ef2270bb8ce8"},
    @{name="project-3.jpg"; id="photo-1497366216548-37526070297c"},
    @{name="project-4.jpg"; id="photo-1503387762-592deb58ef4e"}
)

Write-Host "Downloading images with curl..." -ForegroundColor Cyan

foreach ($img in $images) {
    $url = "https://images.unsplash.com/$($img.id)?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
    $output = Join-Path $imagesDir $img.name
    
    Write-Host "Downloading $($img.name)..." -NoNewline
    # Use curl.exe to avoid PowerShell alias issues
    cmd /c curl.exe -L -s -o "$output" "$url"
    
    if (Test-Path $output) {
        $size = (Get-Item $output).Length
        if ($size -gt 1000) {
            Write-Host " OK ($([math]::Round($size/1KB)) KB)" -ForegroundColor Green
        } else {
            Write-Host " Failed (File too small)" -ForegroundColor Red
        }
    } else {
        Write-Host " Failed (No file)" -ForegroundColor Red
    }
}
