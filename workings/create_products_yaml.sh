#!/bin/bash
# Set IFS to newline to split rows correctly
IFS=$'\n'
for row_str in $(sqlite3 gardening.db 'select slug, name, brand, price, size from product;'); do
    IFS='|' read -r -a COLS <<<"$row_str"
    echo "name: \"${COLS[1]}\""
    echo "brand: \"${COLS[2]}\""
    echo "price: ${COLS[3]}"
    echo "size: ${COLS[4]}"
done
