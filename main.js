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
    data: "https://cccdenhart.github.io/apt-visuals/apts.json"
  });

  map.addSource("airs", {
    type: "geojson",
    data: "https://cccdenhart.github.io/apt-visuals/airs.json"
  });

  map.addLayer({
    id: "apt_dens",
    type: "fill",
    source: "apts",
    layout: {},
    paint: {
      "fill-color": "#008000",
      "fill-opacity": ["get", "density"]
    }
  });

  map.addLayer({
    id: "air_dens",
    type: "fill",
    source: "airs",
    layout: {},
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": ["get", "density"]
    }
  });
});

var toggleableLayerIds = ["apt_dens", "air_dens"];

for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement("button");
  link.href = "#";
  link.className = "active";
  link.textContent = id;
  link.innerHTML = id;

  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, "visibility");

    if (visibility === "visible") {
      map.setLayoutProperty(clickedLayer, "visibility", "none");
      this.className = "";
    } else {
      this.className = "active";
      map.setLayoutProperty(clickedLayer, "visibility", "visible");
    }
  };

  var layers = document.getElementById("menu");
  layers.appendChild(link);
}
