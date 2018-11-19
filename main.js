mapboxgl.accessToken =
  "pk.eyJ1IjoiY2NjZGVuaGFydCIsImEiOiJjamtzdjNuNHAyMjB4M3B0ZHVoY3l2MndtIn0.jkJIFGPTN7oSkQlHi0xtow";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/cccdenhart/cjonpdet931ol2rpbp49oi8a4",
  center: [-71.073329, 42.352738],
  zoom: 12
});

map.on("load", function() {
  map.addSource("apts", {
    type: "geojson",
    data: "https://drive.google.com/open?id=1Apr5vzl440PsGKj1nTQ7V4lip3KK82Np"
  });
});
