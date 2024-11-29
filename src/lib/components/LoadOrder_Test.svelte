<script>
  import { run } from 'svelte/legacy';

  import { onMount } from "svelte";

  // second
  const fetchData = async () => {
    console.log("1. fetchData");
  };

  // first
  console.log("2. started");

  // seventh
  fetchData().then(() => console.log("3. fetched"));

  // fifth
  run(() => {
    console.log("4. reactive");
  });

  // third
  console.log("5. continued");

  // sixth
  onMount(() => {
    console.log("6. onMount");
  });

  // fourth
  console.log("7. after mount");

  /* 
1 ... 2. started
------------------
The fetchData constant is assigned to an asynchronous function. The function isn’t called yet, so it doesn’t log anything at the moment. Hence, the first log that appears in the console is 2. started.

2 ... 1. fetchData
------------------
Next, the fetchData function is called, thus 1. fetchData is logged to the console. The callback .then(() => console.log('3. fetched')) isn’t called just yet—it’s added to the browser’s message queue, and will be called once the event loop reaches it, a bit later.

3 ... 5. continued
------------------
Shouldn’t 4. reactive be logged now? That’s what I thought, but turns out I was wrong. According to the Svelte docs:

  `Reactive statements run after other script code and before the component markup is rendered, whenever the values that they depend on have changed.
  Indeed, other script code hasn’t finished running yet. Therefore, this reactive statement isn’t executed at this time, and the next console log is 5. continued.`

4 .... 7. after mount
------------------
"after mount" is logged to the console. That’s because the callback in onMount will only be called once the component is first rendered, and that hasn’t happened yet.

5 ... 4. reactive
------------------
Now we hit that sweet spot after other script code has been executed, and before the component markup is rendered. This means it’s time to execute that reactive statement, thus logging 4. reactive to the console.

6 ... 6. onMount
------------------
At this point there is no more script code to execute and the component is rendered. Thus, the onMount callback is called and 6. onMount is logged to the console.

7 ... 3. fetched
------------------
What about the callback to our asynchronous function, remember that? Oh yeah, says the event loop, as it handles the message queue. The callback is executed, and finally, 3. fetched is logged to the console.

*/
</script>
