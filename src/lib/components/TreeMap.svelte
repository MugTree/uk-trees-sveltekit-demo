<script>
  import { onMount } from "svelte";

  // props
  export let markers;
  export let tree;

  let leafletObj;
  let mapElement;

  // idea here is to just rerender the map rather than load the whole thing in every time.
  $: if (markers) {
    console.log("draw map");
    draw();
  }

  onMount(async () => {
    console.log("set up map");
    await setup();
  });

  async function setup() {
    if (!leafletObj) {
      try {
        let loadLeaflet = () => {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
            script.crossOrigin = ""; // ?
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load Leaflet"));
            document.body.appendChild(script);
          });
        };

        // load L into global scope
        await loadLeaflet();

        // set component variable
        leafletObj = L.map(mapElement);

        // get the tiles that we can draw on
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(leafletObj);
      } catch (err) {
        console.log(err);
      }
    }
    draw();
  }

  function draw() {
    // return early if no map defined
    if (!leafletObj) return;

    // ----------------------------
    // remove old data
    leafletObj.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Popup) {
        leafletObj.removeLayer(layer);
      }
    });

    const bounds = [];

    // run through our markers value and push to the bounds array
    // -----------------------------------
    markers.forEach((marker) => {
      L.popup()
        .setLatLng([marker.latitude, marker.longitude])
        .setContent(marker.name)
        .addTo(leafletObj);
      bounds.push([marker.latitude, marker.longitude]);
    });

    // this isn't quite right!!
    // ---------------------------
    leafletObj.fitBounds(bounds).zoomOut(1);
  }
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
