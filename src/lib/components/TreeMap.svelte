<script>
  import { browser } from "$app/environment";
  export let markers;
</script>

{#if browser}
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    id="map"
    style="
    width: 340px;
    height: 340px;
    position: relative;
    margin: 24px auto 0 auto;
  "
    class="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    tabindex="0"
  >
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      crossorigin=""
    ></script>

    <script src="/js/treesmap.js"></script>
  </div>
{/if}

<p>This is the map script</p>
