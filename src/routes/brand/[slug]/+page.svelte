<script>
  import Comparison from "../../../lib/components/Comparison.svelte";

  export let data;
</script>

<h1>{data.brand.meta.name}</h1>

<svelte:component this={data.component} />

<h2>{data.brand.meta.name} products</h2>

<Comparison products={data.products} />
