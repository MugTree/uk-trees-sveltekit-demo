<script>
  import Comparison from "../../../lib/components/Comparison.svelte";
  import Image from "../../../lib/components/Image.svelte";
  import Map from "../../../lib/components/Map.svelte";
  import Qa from "../../../lib/components/Qa.svelte";

  export let data;
  console.log("data :>> ", data);
  $: ({ tree, trees, qa, treeMap } = data);
  const props = { tree };
</script>

<h1>{tree.meta.title} - ({tree.meta.latin})</h1>

<hr />

<section>
  <Image data={tree.meta} />
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
    <div class="right"><Map data={treeMap} /></div>
  </div>
</section>

<section>
  <h2 class="spacer">Questions about {tree.meta.title} trees</h2>
  <hr />
  {#each qa.data as q}
    <Qa data={q} />
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
