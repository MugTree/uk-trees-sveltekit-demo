<script>
  import { browser } from "$app/environment";
  export let data;
</script>

{#if browser}
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    crossorigin=""
  ></script>
  <script>
    // fix
    let markers = { data };
  </script>
{/if}

<p>This is the map script</p>
