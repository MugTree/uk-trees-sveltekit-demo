<script>
  export let data;
</script>

<h1>{data.brand.meta.name}</h1>

<svelte:component this={data.component} />
