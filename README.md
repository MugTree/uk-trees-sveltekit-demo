# Basic Sveltekit site

- Pico CSS speed up development
- Basic use of components
- Content created by AI (CGPT) and added to content folder (content.md and qanda.json)
- Images initially resized using ImageMagik (thumbnails are trickier than Hugo)
  Imagemagick allow for a similar effect to hugos crop although chatgpt had to help with that

## Issues

Had to create intermediate +page.js files to return the page content

- See here
  https://github.com/sveltejs/kit/issues/6008#issuecomment-1227359874

- Options to fix

  - https://github.com/flightcontrolhq/superjson
  - https://github.com/rich-harris/devalue

Both just add dependencies

## Todo

[x] sizing for screen sizes - media queries

[] Add github pages adaptor

[] Add map script

[] Componentise

[] Fix CSS

[x] Add a robots.txt to keep out of indexes

[x] Add a githubpages script to deploy

[] basic js table sort - add data attributes

..
