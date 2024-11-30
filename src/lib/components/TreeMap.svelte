<script>
  import { run } from "svelte/legacy";

  import { onMount } from "svelte";

  /**
   * @typedef {Object} Props
   * @property {any} markers - props
   * @property {any} tree
   */

  /** @type {Props} */
  let { markers, tree } = $props();

  let leafletInstance = $state(); // Leaflet map instance
  let mapElement = $state(); // Map DOM element

  onMount(async () => {
    await setup();
  });

  async function setup() {
    console.log("setup()");
    if (!leafletInstance) {
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
        leafletInstance = L.map(mapElement);

        // get the tiles that we can draw on
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(leafletInstance);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function draw() {
    // console.log("draw()");
    // not addigned a value yet
    if (!leafletInstance) return;

    console.log("drawing markers on map");
    console.log("--------------------");

    // clear existing
    // ------------------------------------------
    leafletInstance.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Popup) {
        leafletInstance.removeLayer(layer);
      }
    });

    // run through our markers value and push to the bounds array
    // -----------------------------------
    const bounds = [];
    markers.forEach((marker) => {
      L.popup()
        .setLatLng([marker.latitude, marker.longitude])
        .setContent(marker.name)
        .addTo(leafletInstance);
      bounds.push([marker.latitude, marker.longitude]);
    });

    if (bounds.length > 0) {
      leafletInstance.fitBounds(bounds);
    } else {
      console.log("No markers to fit bounds.");
    }
  }
  // wait for a leafletInstance to become available before we draw map
  $effect(() => {
    if (markers && leafletInstance) {
      draw();
    }
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    crossorigin=""
  />
</svelte:head>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
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
