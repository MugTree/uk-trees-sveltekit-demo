<script>
  import Comparison from "../../../lib/components/Comparison.svelte";
  export let data;
  const { product } = data;
  const props = { product };
</script>

<h1>{product.meta.name}</h1>

<svelte:component this={data.component} {...props} />

<Comparison products={[product]} />
