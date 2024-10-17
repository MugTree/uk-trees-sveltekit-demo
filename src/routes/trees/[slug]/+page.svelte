<script>
  export let data;
  const { tree } = data;
  const props = { tree };
</script>

<svelte:component this={data.component} {...props} />
