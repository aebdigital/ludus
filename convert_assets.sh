#!/bin/bash

# Create directories
mkdir -p public/videos
mkdir -p public/images/gallery/skola
mkdir -p public/images/gallery/tabor

# Convert Videos
echo "Converting videos..."

# Divadelné laboratórium
if [ -f "public/new/divadelné laboratórium recenzia.MOV" ]; then
    ffmpeg -y -i "public/new/divadelné laboratórium recenzia.MOV" -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k "public/videos/divadelne-laboratorium.mp4"
fi

# Improvizácia
if [ -f "public/new/improvizačné kurzy/copy_182F863D-6951-425B-8DE5-B7647F40407E.MOV" ]; then
    ffmpeg -y -i "public/new/improvizačné kurzy/copy_182F863D-6951-425B-8DE5-B7647F40407E.MOV" -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k "public/videos/improvizacia.mp4"
fi

# Firemný Workshop
if [ -f "public/new/video firemný workshop kudus academy/minomvládna organizácia ČLOVEK V o OHROZENÍkomunikačno mediálny tréning.MOV" ]; then
    ffmpeg -y -i "public/new/video firemný workshop kudus academy/minomvládna organizácia ČLOVEK V o OHROZENÍkomunikačno mediálny tréning.MOV" -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k "public/videos/firemny-workshop.mp4"
fi

# Workshopy pre školy (mp4 copy)
cp "public/new/videa na workshopy pre školy/VIDEO-2026-02-08-10-05-49.mp4" "public/videos/workshopy-skoly-1.mp4"
cp "public/new/videa na workshopy pre školy/VIDEO-2026-02-08-10-05-49 2.mp4" "public/videos/workshopy-skoly-2.mp4"

# Convert Images
echo "Converting images..."

# Skola
for f in "public/new/fotky škola"/*.HEIC; do
    filename=$(basename "$f")
    filename="${filename%.*}"
    ffmpeg -y -i "$f" "public/images/gallery/skola/$filename.webp"
done
# Handle JPGs in Skola if any
for f in "public/new/fotky škola"/*.JPG; do
    filename=$(basename "$f")
    filename="${filename%.*}"
    ffmpeg -y -i "$f" "public/images/gallery/skola/$filename.webp"
done

# Tabor
for f in "public/new/fotky tábor"/*.HEIC; do
    filename=$(basename "$f")
    filename="${filename%.*}"
    ffmpeg -y -i "$f" "public/images/gallery/tabor/$filename.webp"
done
# Handle JPGs in Tabor
for f in "public/new/fotky tábor"/*.JPG; do
    filename=$(basename "$f")
    filename="${filename%.*}"
    ffmpeg -y -i "$f" "public/images/gallery/tabor/$filename.webp"
done

echo "Done!"
