<script lang="js">
  export let products;
</script>

<table>
  <thead>
    <th>Brand</th>
    <th>Name</th>
    <th>Price</th>
    <th>Size</th>
  </thead>
  {#each products as p}
    <tbody>
      <td>{p.meta.brand}</td>
      <td>{p.meta.name}</td>
      <td>{p.meta.price}</td>
      <td>{p.meta.size}</td>
    </tbody>
  {/each}
</table>

<style>
</style>
