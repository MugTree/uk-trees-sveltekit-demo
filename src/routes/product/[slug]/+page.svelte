<script>
  export let data;
</script>

<h1>{data.product.meta.name}</h1>

<svelte:component this={data.component} />
