<script lang="js">
  export let trees;
  export let treeName;
</script>

<table class="striped">
  <thead>
    <tr>
      <th>Tree</th>
      <th>Max Age (y)</th>
      <th>Max Height (m)</th>
      <th>Est. number</th>
    </tr>
  </thead>
  <tbody>
    {#each trees as t}
      <tr>
        <td>
          <span class={t.meta.title === treeName ? "selected" : ""}
            >{t.meta.title}</span
          >
        </td>
        <td>{t.meta.maxAge}</td>
        <td>{t.meta.maxHeight}</td>
        <td>{t.meta.approxNumber}</td>
      </tr>
    {/each}
  </tbody>
</table>
