<script>
  import { onMount } from "svelte";
  export let markers;
  export let tree;

  console.log("markers :>> ", markers);
  console.log("tree :>> ", tree);

  let map;
  let mapElement;

  function loadLeaflet() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
      script.crossOrigin = "";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Leaflet"));
      document.body.appendChild(script);
    });
  }

  async function initializeMap() {
    if (!map) {
      await loadLeaflet();
      map = L.map(mapElement);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
    updateMap();
  }

  function updateMap() {
    if (!map) return;
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Popup) {
        map.removeLayer(layer);
      }
    });

    const bounds = [];
    markers.forEach((marker) => {
      L.popup()
        .setLatLng([marker.latitude, marker.longitude])
        .setContent(marker.name)
        .addTo(map);
      bounds.push([marker.latitude, marker.longitude]);
    });

    // this isn't quite right!!
    map.fitBounds(bounds).zoomOut(1);
  }

  $: if (markers) {
    updateMap();
  }

  onMount(initializeMap);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    crossorigin=""
  />
</svelte:head>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  bind:this={mapElement}
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
