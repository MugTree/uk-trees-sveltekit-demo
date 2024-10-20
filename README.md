# Basic Sveltekit site

🌎 https://mugtree.github.io/uk-trees-sveltekit-demo/

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

This is still an issue on the live site :(

## Static adaptor

Needs a static adaptor to run on git hub pages
https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

## To deploy

Uses
https://www.npmjs.com/package/gh-pages

Ignore using the workflow directory and just run

npm run deploy

- npm install gh-pages --save-dev

## Todo

- [x] sizing for screen sizes - media queries
- [x] Add github pages and static adaptor
- [x] Add map script
- [x] Componentise

..
