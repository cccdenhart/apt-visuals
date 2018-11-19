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
    data:
      "http://bostonopendata-boston.opendata.arcgis.com/datasets/53ea466a189b4f43b3dfb7b38fa7f3b6_1.geojson"
  });

  map.addLayer({
    id: "apts_dens",
    type: "fill",
    source: "apts",
    layout: {},
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0.4
    }
  });
});
