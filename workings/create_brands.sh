#!/bin/bash
sqlite3 -separator $'\x1F' gardening.db 'select slug, name, replace(writeup, char(10), "\n") from brand;' | while IFS=$'\x1F' read -r slug name writeup; do

    FILENAME="/Users/me/Developer/sveltekit/test-app/data/brands/$slug.md"

    newwriteup=$(echo -e "$writeup")

    cat <<EOF >$FILENAME
---
name: $name
---

$newwriteup
EOF

done
