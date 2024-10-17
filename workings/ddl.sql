CREATE TABLE IF NOT EXISTS product (
    slug TEXT PRIMARY KEY,
    name TEXT,
    brand TEXT NOT NULL,
    price INTEGER NOT NULL,
    size INTEGER NOT NULL,
    writeup TEXT NOT NULL  
);

CREATE TABLE IF NOT EXISTS post (
     slug TEXT PRIMARY KEY,
     name TEXT NOT NULL,
     writeup TEXT NOT NULL  
);

CREATE TABLE IF NOT EXISTS brand (
     slug TEXT PRIMARY KEY,
     name TEXT NOT NULL,
     writeup TEXT NOT NULL  
);

