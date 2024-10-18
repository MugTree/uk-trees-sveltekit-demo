<script>
  import { divideArrayWithMaxSize } from "../lib/lib";
  export let data;
  // create an even layout
  const layoutPages = divideArrayWithMaxSize(data.pages, 3);
  const thumbnail = (path) => path.replace("trees", "trees/thumbs");
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
    <div class="grid">
      {#each page as p}
        <div class="grid-item">
          <a href={"/trees/" + p.slug}
            ><img
              alt=""
              loading="lazy"
              width="340px"
              class="grid-img"
              src={"/static" + thumbnail(p.meta.image.path)}
            /></a
          >
          <h2 class="grid-head">
            <a href={"/trees/" + p.slug}>{p.meta.title}</a>
          </h2>
          <p class="grid-content">{p.meta.summary}</p>
        </div>
      {/each}
    </div>
  </section>
{/each}

<style>
</style>
