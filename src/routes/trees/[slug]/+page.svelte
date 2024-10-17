<script>
  export let data;
  const { product } = data;
  const props = { product };
</script>

<svelte:component this={data.component} {...props} />
