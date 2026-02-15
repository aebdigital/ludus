#!/bin/bash

# List of images to rotate 90 degrees clockwise (right)
declare -a images90=(
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_1128.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_1323.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_3649.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_4194.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_4766.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_9005.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_9026.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/academy/IMG_9073.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/reviews/writing-ivetka-1.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_0013.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_0016.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_1789.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_1838.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_1875.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_1879.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_2108.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_3451.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_3487.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_4254.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_4255.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_4346.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_4742.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_5289.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_5404.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_7738.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_7792.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_7793.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_8013.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_8257.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_8539.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_8545.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_8911.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_9976.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/skola/IMG_9980.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/tabor/IMG_5330.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/tabor/IMG_5327.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/tabor/IMG_5416.webp"
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/tabor/IMG_5421.webp"
)

# List of images to rotate 180 degrees (twice right)
declare -a images180=(
    "/Users/alexanderhidveghy/Documents/cms/ludushub/public/images/reviews/improv-standup.webp"
)

# Rotate 90 degrees
for img in "${images90[@]}"; do
    if [ -f "$img" ]; then
        echo "Rotating $img 90 degrees..."
        magick "$img" -rotate 90 "$img"
    else
        echo "File not found: $img"
    fi
done

# Rotate 180 degrees
for img in "${images180[@]}"; do
    if [ -f "$img" ]; then
        echo "Rotating $img 180 degrees..."
        magick "$img" -rotate 180 "$img"
    else
        echo "File not found: $img"
    fi
done

echo "Rotation complete."
