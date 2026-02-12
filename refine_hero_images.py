import urllib.request
import os

images = [
    # Hero 1: Leadership (Green Skyscraper) - Replacing the healthcare copy
    {"name": "hero-1.jpg", "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&fm=jpg&w=1920"},
    
    # Hero 2: Metro Systems (Green Transport/City)
    {"name": "hero-2.jpg", "url": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&fm=jpg&w=1920"}, # Sustainable city/transport feel
    
    # Hero 3: Congress (Conference wide shot)
    {"name": "hero-3.jpg", "url": "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&fm=jpg&w=1920"}, # Conference
]

headers = {'User-Agent': 'Mozilla/5.0'}

print("Refining Hero images...")
for img in images:
    output = f"public/images/{img['name']}"
    print(f"Downloading {img['name']}...")
    try:
        req = urllib.request.Request(img['url'], headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(output, 'wb') as f:
                f.write(response.read())
        print(f"✓ Updated {img['name']}")
    except Exception as e:
        print(f"✗ Failed {img['name']}: {e}")
