#!/bin/bash
# Replace newlines in the writeup with a placeholder (\n) and use a custom separator
sqlite3 -separator $'\x1F' gardening.db 'select slug, name, brand, price, size, replace(writeup, char(10), "\n") from product;' | while IFS=$'\x1F' read -r slug name brand price size writeup; do

    FILENAME="/Users/me/Developer/sveltekit/test-app/data/products/$slug.md"

    newwriteup=$(echo -e "$writeup")

    cat <<EOF >$FILENAME
--- 
name: $name
brand: $brand
price: $price
size: $size
---

$newwriteup
EOF

done
