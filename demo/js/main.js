define([
  'esri/Map',
  'esri/views/MapView',
  'magcore/main',
  'magcore/resources/color-ramps',
  'magcore/utils/data',
  'magcore/widgets/layer-list',
], function (Map, MapView, magcore, colorRamps, data, LayerList) {
  console.log(magcore);
  console.log(colorRamps);
  console.log(data);

  var map = new Map({
    basemap: 'streets',
  });
  var view = new MapView({
    container: 'mapDiv',
    map: map,
    extent: {
      xmin: -13271172.93,
      ymin: 3506737.09,
      xmax: -11501054.53,
      ymax: 4612403.73,
      spatialReference: {
        wkid: 102100,
      },
    },
  });

  var test = new LayerList({
    map,
    layers: [],
  });

  console.log(test);
});
