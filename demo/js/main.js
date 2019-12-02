define([
  "esri/Map",
  "esri/views/MapView"
],
  function (Map, MapView) {
    var map = new Map({
      basemap: "streets"
    });
    var view = new MapView({
      container: "mapDiv",
      map: map,
      extent: {
        xmin: -13271172.93,
        ymin: 3506737.09,
        xmax: -11501054.53,
        ymax: 4612403.73,
        spatialReference: {
          wkid: 102100
        }
      }
    });
  });