<script>
  export let data;
</script>

<h1>{data.slug}</h1>

<ul>
  {#each data.brands as brand}
    <li>{brand.hey}</li>
  {/each}
</ul>
