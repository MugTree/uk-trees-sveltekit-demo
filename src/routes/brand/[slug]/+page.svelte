<script>
  import Comparison from "../../../lib/components/Comparison.svelte";

  export let data;
</script>

<h1>{data.brand.meta.name}</h1>

<Comparison products={data.products} />

<svelte:component this={data.component} />
