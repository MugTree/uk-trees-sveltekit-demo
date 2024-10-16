<script>
  export let data;
</script>

<h1>{data.slug}</h1>

<ul>
  {#each data.data as item}
    <li>{item.hey}</li>
  {/each}
</ul>
