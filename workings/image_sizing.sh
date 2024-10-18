#!/bin/bash
# image
# thumbnail
# assumes portrait see how it works with landscape i think there are a few
# images will be named numbered sequentaially

# thumbs
# ==============
# thumbs

# any number of dirs to add
dirs=(trees)

src="/Users/me/Developer/sveltekit/trees/workings/"
dst="/Users/me/Developer/sveltekit/trees/static/images"
i=0
# tn_size=200
size=340

for dir in "${dirs[@]}"; do

    echo "looking at " . $dir
    for fileName in "$src$dir"/*; do
        i=$((i + 1))
        echo $fileName
        echo $i

        # create a . set of images with a fixed width
        orig_width=$(identify -format "%w" "$fileName")
        orig_height=$(identify -format "%h" "$fileName")
        height=$(($size * orig_height / orig_width))
        echo $height
        file=$(basename $fileName)
        echo $file
        magick "$fileName" -resize ${size}x${height} $dst/$dir/$file

        # cgpt
        # magick "$fileName" -gravity center -define jpeg:extent=340x160 -crop 340x160+0+0 $dst/$dir/thumbs/$file
        magick "$fileName" -resize 340x160^ -gravity center -extent 340x160 $dst/$dir/thumbs/$file

        # magick "$fileName" -gravity center -crop 340x160+0+0 $dst/$dir/thumbs/$file
    done
    i=0
done
