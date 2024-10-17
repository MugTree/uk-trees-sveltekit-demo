<script>
  import Comparison from "../../../lib/components/Comparison.svelte";

  export let data;
  console.log("data :>> ", data);
  $: ({ tree, trees, qa } = data);
  const props = { tree };
</script>

<h1>{tree.meta.title} - ({tree.meta.latin})</h1>

<hr />

<section>
  <figure class="main-img">
    <img
      loading="lazy"
      width="340px"
      src={"/static/" + tree.meta.image.path}
      alt=""
    />
    <figcaption class="caption">
      Image by
      <a href={tree.meta.image.path} class="secondary"
        >{tree.meta.image.credit}</a
      >
    </figcaption>
  </figure>

  <p><em>{tree.meta.summary}</em></p>
  <svelte:component this={data.component} {...props} />
  <div class="clear"></div>
</section>

<section>
  <div>
    <h2>{tree.meta.title} trees in context</h2>
  </div>
  <div class="databox">
    <div class="left"><Comparison {trees} treeName={tree.meta.title} /></div>
    <!-- <div class="right">{{ partial "map" . }}</div> -->
  </div>
</section>

<section>
  <h2 class="spacer">Questions about {tree.meta.title} trees</h2>
  <hr />
  {#each qa.data as q}
    <details>
      <summary><b>{q.question}</b></summary>
      <p>{q.answer}</p>
    </details>
  {/each}
  <hr />
</section>

<section>
  <h2 class="spacer">Other trees</h2>
  <ul>
    {#each trees as t}
      <li><a href={t.slug}>{t.meta.title}</a></li>
    {/each}
  </ul>
</section>
