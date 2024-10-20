const mapElement = document.getElementById("treemap");

if (mapElement) {
  console.log("Map element found, attaching event listener for markers-loaded");

  const markers = window.markersData;
  console.log("markers :>> ", markers);

  const map = L.map("treemap");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let bounds = [];

  for (let i = 0; i < markers.length; i++) {
    L.popup()
      .setLatLng([markers[i].latitude, markers[i].longitude])
      .setContent(markers[i].name) // Use the name from markers array
      .addTo(map); // Add popup to map

    bounds.push([markers[i].latitude, markers[i].longitude]);
  }

  map.fitBounds(bounds).zoomOut(1);
} else {
  console.error("Map element not found!");
}
