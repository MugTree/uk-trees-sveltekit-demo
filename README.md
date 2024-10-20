# Basic Sveltekit site

- Pico CSS speed up development
- Simple use of components
- Content created by AI (CGPT) and added to content folder (content.md and qanda.json)
- Images initially resized using ImageMagik (thumbnails are trickier than Hugo)
  Imagemagick allow for a similar effect to hugos crop although chatgpt had to help with that
- Markdown usuage based on this https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

## Issues

Had to create intermediate +page.js files to return the page content

- See here
  https://github.com/sveltejs/kit/issues/6008#issuecomment-1227359874

- Options to fix

  - https://github.com/flightcontrolhq/superjson
  - https://github.com/rich-harris/devalue

Both just add dependencies

Other issues involved getting external scripts to run at the right time in a Svelte component

- See <TreeMap>
  /src/lib/components/TreeMap.svelte

## Static adaptor

Needs a static adaptor to run on git hub pages
https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

## Todo

[x] sizing for screen sizes - media queries

[] Add github pages adaptor

[x] Add map script

[x] Componentise

[x] Fix CSS

[x] Add a robots.txt to keep out of indexes

[x] Add a githubpages script to deploy

..
