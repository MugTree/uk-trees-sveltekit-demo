<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script>
  import Comparison from "../../../lib/components/Comparison.svelte";
  import Image from "../../../lib/components/Image.svelte";
  import TreeMap from "../../../lib/components/TreeMap.svelte";
  import Qa from "../../../lib/components/Qa.svelte";
  import LoadOrder_Test from "../../../lib/components/LoadOrder_Test.svelte";

  export let data;
  $: ({ tree, trees, qa, treeMap } = data);

  const p = tree;
</script>

<h1>{tree.meta.title} - ({tree.meta.latin})</h1>

<hr />

<!-- <LoadOrder_Test /> -->
<section>
  <Image data={tree.meta} />
  <p><em>{tree.meta.summary}</em></p>
  <svelte:component this={data.component} {...p} />
  <div class="clear"></div>
</section>

<section>
  <div>
    <h2>{tree.meta.title} trees in context</h2>
  </div>
  <div class="databox">
    <div class="left"><Comparison {trees} treeName={tree.meta.title} /></div>
    <div class="right">
      <TreeMap markers={treeMap.data} tree={tree.meta.title} />
    </div>
  </div>
</section>

<section>
  <h2 class="spacer">Questions about {tree.meta.title} trees</h2>
  <hr />
  {#each qa.data as q}
    <Qa data={q} />
  {/each}
</section>

<section>
  <h2 class="spacer">Other trees</h2>
  <ul>
    {#each trees as t}
      <li><a href={t.slug}>{t.meta.title}</a></li>
    {/each}
  </ul>
</section>
