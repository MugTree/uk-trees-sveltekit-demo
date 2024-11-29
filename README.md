# Basic Sveltekit site

🌎 https://mugtree.github.io/uk-trees-sveltekit-demo/

- Pico CSS speed up development
- Simple use of components
- Content created by AI (CGPT) and added to content folder (content.md and qanda.json)
- Images initially resized using ImageMagik (thumbnails are trickier than Hugo)
- Imagemagick allow for a similar effect to hugos crop although chatgpt had to help with that

  ```shell
  ./workings/image_sizing.sh
  ```

- Markdown usuage based on this https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

## Issues

Had to create intermediate +page.js files to return the page content

- See here
  https://github.com/sveltejs/kit/issues/6008#issuecomment-1227359874

- Options to fix

  - https://github.com/flightcontrolhq/superjson
  - https://github.com/rich-harris/devalue

Both just add dependencies

## Static adaptor

Needs a static adaptor to run on git hub pages
https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

## To deploy

Uses
https://www.npmjs.com/package/gh-pages

Simply run...

```bash
npm run deploy
```

## Svelte Script Code Execution Order

From - https://dev.to/idosius/svelte-script-code-execution-order-4n1m

```javascript
import { onMount } from "svelte";

const fetchData = async () => {
  console.log("1. fetchData");
};

console.log("2. started");

fetchData().then(() => console.log("3. fetched"));

$: console.log("4. reactive");

console.log("5. continued");

onMount(() => {
  console.log("6. onMount");
});

console.log("7. after mount");
```

### Actual order of execution...

#### First - "2. started"

The fetchData constant is assigned to an asynchronous function. The function isn’t called yet, so it doesn’t log anything at the moment. Hence, the first log that appears in the console is 2. started.

#### Second - "1. fetchData"

Next, the fetchData function is called, thus 1. fetchData is logged to the console. The callback .then(() => console.log('3. fetched')) isn’t called just yet—it’s added to the browser’s message queue, and will be called once the event loop reaches it, a bit later.

#### Third - "5. continued"

Shouldn’t 4. reactive be logged now? That’s what I thought, but turns out I was wrong. According to the Svelte docs:

**Reactive statements run after other script code and before the component markup is rendered, whenever the values that they depend on have changed.
Indeed, other script code hasn’t finished running yet. Therefore, this reactive statement isn’t executed at this time, and the next console log is 5. continued.**

#### Fourth - "7. after mount"

"after mount" is logged to the console. That’s because the callback in onMount will only be called once the component is first rendered, and that hasn’t happened yet.

#### Fifth - "4. reactive"

Now we hit that sweet spot after other script code has been executed, and before the component markup is rendered. This means it’s time to execute that reactive statement, thus logging 4. reactive to the console.

#### Sixth - "6. onMount"

At this point there is no more script code to execute and the component is rendered. Thus, the onMount callback is called and 6. onMount is logged to the console.

#### Seventh - "3. fetched"

What about the callback to our asynchronous function, remember that? Oh yeah, says the event loop, as it handles the message queue. The callback is executed, and finally, 3. fetched is logged to the console.

## Todo

- [x] sizing for screen sizes - media queries
- [x] Add github pages adaptor
- [x] Move script to a svelte component
- [x] Componentise
- [x] Fix CSS
- [x] Add a robots.txt to keep out of indexes
- [x] Add a githubpages script to deploy
- [] basic js table sort - add data attributes
