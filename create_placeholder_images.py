from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if it doesn't exist
os.makedirs('public/images', exist_ok=True)

# Define images to create
images = [
    {'name': 'hero-1.jpg', 'size': (1920, 1080), 'color': '#2d5016', 'text': 'Green Building 1'},
    {'name': 'hero-2.jpg', 'size': (1920, 1080), 'color': '#3a6b1f', 'text': 'Green Building 2'},
    {'name': 'hero-3.jpg', 'size': (1920, 1080), 'color': '#4a7c2f', 'text': 'Green Building 3'},
    {'name': 'about-building.jpg', 'size': (1600, 900), 'color': '#2d5016', 'text': 'About GBAC'},
    {'name': 'event-congress.jpg', 'size': (1600, 900), 'color': '#3a6b1f', 'text': 'GBAC Congress'},
    {'name': 'project-1.jpg', 'size': (800, 600), 'color': '#2d5016', 'text': 'Project 1'},
    {'name': 'project-2.jpg', 'size': (800, 600), 'color': '#3a6b1f', 'text': 'Project 2'},
    {'name': 'project-3.jpg', 'size': (800, 600), 'color': '#4a7c2f', 'text': 'Project 3'},
    {'name': 'project-4.jpg', 'size': (800, 600), 'color': '#5a8d3f', 'text': 'Project 4'},
]

print("Creating placeholder images...")

for img_data in images:
    # Create image with solid color
    img = Image.new('RGB', img_data['size'], color=img_data['color'])
    draw = ImageDraw.Draw(img)
    
    # Add text in the center
    text = img_data['text']
    # Use a larger font size based on image size
    font_size = img_data['size'][1] // 15
    
    try:
        # Try to use a default font
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate position to center text
    position = (
        (img_data['size'][0] - text_width) // 2,
        (img_data['size'][1] - text_height) // 2
    )
    
    # Draw text
    draw.text(position, text, fill='white', font=font)
    
    # Save image
    output_path = os.path.join('public', 'images', img_data['name'])
    img.save(output_path, 'JPEG', quality=85)
    print(f"✓ Created {img_data['name']}")

print("\nAll placeholder images created successfully!")
print("These are temporary placeholders with green backgrounds.")
print("Replace them with actual images from Unsplash or Pexels for production.")
