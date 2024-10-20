<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  export let markers;
  export let tree;

  onMount(() => {
    if (browser) {
      // simple approach to make the markers data available to the treesmap.js script
      window.markersData = markers;

      const ms = document.createElement("script");
      ms.src = base + "/js/treesmap.js";
      ms.async = true;
      document.body.appendChild(ms);
    }
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    crossorigin=""
  ></script>
</svelte:head>

{#if browser}
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    id="treemap"
    style="
    width: 340px;
    height: 340px;
    position: relative;
    margin: 24px auto 0 auto;
  "
    class="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    tabindex="0"
  ></div>
  <p class="caption">{tree} trees in the UK</p>
{/if}
