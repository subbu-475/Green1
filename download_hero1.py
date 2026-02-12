import urllib.request
import os
import shutil

# Try a different ID: "Ecological architecture"
url = "https://images.unsplash.com/photo-1581094794329-cd8119604f8b?ixlib=rb-4.0.3&fm=jpg&w=1920"
output_path = "public/images/hero-1.jpg"

print(f"Downloading hero-1.jpg (Attempt 2)...")

try:
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    
    with urllib.request.urlopen(req) as response:
        with open(output_path, 'wb') as out_file:
            out_file.write(response.read())
            
    size = os.path.getsize(output_path)
    print(f"Successfully downloaded hero-1.jpg ({size} bytes)")
    
except Exception as e:
    print(f"Error downloading: {e}")
    # Fallback: Copy project-4.jpg
    if os.path.exists("public/images/project-4.jpg"):
        shutil.copy("public/images/project-4.jpg", output_path)
        print("Fallback: Copied project-4.jpg to hero-1.jpg")
