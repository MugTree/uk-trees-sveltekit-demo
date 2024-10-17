<script>
  export let data;
</script>

<h1>{data.post.meta.name}</h1>

<svelte:component this={data.component} />
