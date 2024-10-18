<script>
  import { divideArrayWithMaxSize } from "../lib/lib";
  export let data;
  // create an even layout
  const layoutPages = divideArrayWithMaxSize(data.pages, 3);
</script>

<h1>Welcome to this website British trees</h1>

<hr />

<section>
  <p>
    The UK is home to a diverse range of tree species, many of which play
    crucial roles in the country’s ecosystems, culture, and history. From
    towering oaks and elegant ash trees to resilient pines and graceful elms,
    British woodlands offer habitats for countless wildlife species.
  </p>
</section>

{#each layoutPages as page}
  <section>
    {#each page as p}
      <p>{p.meta.title} - {p.meta.date}</p>
    {/each}
  </section>
{/each}

<style>
</style>
