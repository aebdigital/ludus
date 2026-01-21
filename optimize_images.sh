#!/bin/bash

# Directory to scan
DIR="public/images"
MAX_WIDTH=2200

# Helper function to process images
process_image() {
    local img="$1"
    
    # Get current width
    width=$(sips -g pixelWidth "$img" | grep 'pixelWidth' | awk '{print $2}')
    
    if [ ! -z "$width" ] && [ "$width" -gt "$MAX_WIDTH" ]; then
        echo "Resizing $img (Current width: $width)..."
        # Resample height and width to max 2200px width (keeping aspect ratio)
        sips -Z "$MAX_WIDTH" "$img" --out "$img" > /dev/null
    else
        echo "Skipping $img (Width: $width)"
    fi
}

export -f process_image
export MAX_WIDTH

echo "Starting image optimization..."
# Find and process jpg, jpeg, png
find "$DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -print0 | while IFS= read -r -d '' file; do
    process_image "$file"
done

echo "Optimization complete!"
