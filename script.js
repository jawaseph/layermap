console.log("javascript working!"); // Just to test. 

var distExosphere = 1280000;
var distThermosphere = 600000;
var distMesosphere = 80000;
var distStratosphere = 50000;
var distTroposphere = 17000;

var distHadalzone = 10911;
var distAbyssalzone = 6000;
var distBathylzone = 4000;
var distMesopalegiczone = 1000;
var distEpipelagiczone = 200;

var distInnercore = 6378000;
var distOutercore = 5150000;
var distMantle = 2900000;
var distCrust = 30000;

var speedPlane = 245;
var speedCar  = 25;
var speedBike = 5;

var data;

   google.load("visualization", "1", {packages:["table"]});
      google.setOnLoadCallback(drawTable);


      function drawTable() {
        data = new google.visualization.DataTable();
        data.addColumn('string', 'Layer Name');
        data.addColumn('number', 'Distance (meters)');
        data.addColumn('number', 'Flight Time (mins)');
        data.addColumn('number', 'Drive Time (mins)');
        data.addColumn('number', 'Bike Time (mins)');
        data.addColumn('boolean', 'SEPTA Accessible?');
        data.addRows([
          ['Epipelagic Zone',   {v: distEpipelagiczone,   f: String(Math.round(distEpipelagiczone))},     {v: (distEpipelagiczone/speedPlane)/60, f: String(Math.round((distEpipelagiczone/speedPlane)/60))},           {v: (distEpipelagiczone/speedCar)/60, f: String(Math.round((distEpipelagiczone/speedCar)/60))},       {v: (distEpipelagiczone/speedBike)/60, f: String(Math.round((distEpipelagiczone/speedBike)/60))},      true],
          ['Mesopalegic Zone',  {v: distMesopalegiczone,   f: String(Math.round(distMesopalegiczone))},   {v: (distMesopalegiczone/speedPlane)/60, f: String(Math.round((distMesopalegiczone/speedPlane)/60))},         {v: (distMesopalegiczone/speedCar)/60, f: String(Math.round((distMesopalegiczone/speedCar)/60))},     {v: (distMesopalegiczone/speedBike)/60, f: String(Math.round((distMesopalegiczone/speedBike)/60))},    true],
          ['Bathyl Zone',       {v: distBathylzone, f: String(Math.round(distBathylzone))},               {v: (distBathylzone/speedPlane)/60, f: String(Math.round((distBathylzone/speedPlane)/60))},                   {v: (distBathylzone/speedCar)/60, f: String(Math.round((distBathylzone/speedCar)/60))},               {v: (distBathylzone/speedBike)/60, f: String(Math.round((distBathylzone/speedBike)/60))},              true],
          ['Abyssal Zone',      {v: distMesopalegiczone,   f: String(Math.round(distMesopalegiczone))},   {v: (distMesopalegiczone/speedPlane)/60, f: String(Math.round((distMesopalegiczone/speedPlane)/60))},         {v: (distAbyssalzone/speedCar)/60, f: String(Math.round((distAbyssalzone/speedCar)/60))},             {v: (distAbyssalzone/speedBike)/60, f: String(Math.round((distAbyssalzone/speedBike)/60))},            true],
          ['Hadal Zone',        {v: distHadalzone,   f: String(Math.round(distHadalzone))},               {v: (distHadalzone/speedPlane)/60, f: String(Math.round((distHadalzone/speedPlane)/60))},                     {v: (distHadalzone/speedCar)/60, f: String(Math.round((distHadalzone/speedCar)/60))},                 {v: (distHadalzone/speedBike)/60, f: String(Math.round((distHadalzone/speedBike)/60))},                true],          
          ['Troposphere',       {v: distTroposphere,  f: String(Math.round(distTroposphere))},            {v: (distTroposphere/speedPlane)/60, f: String(Math.round((distTroposphere/speedPlane)/60))},                 {v: (distTroposphere/speedCar)/60, f: String(Math.round((distTroposphere/speedCar)/60))},             {v: (distTroposphere/speedBike)/60, f: String(Math.round((distTroposphere/speedBike)/60))},            true],
          ['Stratosphere',      {v: distStratosphere,  f: String(Math.round(distStratosphere))},          {v: (distStratosphere/speedPlane)/60, f: String(Math.round((distStratosphere/speedPlane)/60))},               {v: (distStratosphere/speedCar)/60, f: String(Math.round((distStratosphere/speedCar)/60))},           {v: (distStratosphere/speedBike)/60, f: String(Math.round((distStratosphere/speedBike)/60))},          true],
          ['Mesosphere',        {v: distMesosphere,  f: String(Math.round(distMesosphere))},              {v: (distMesosphere/speedPlane)/60, f: String(Math.round((distMesosphere/speedPlane)/60))},                   {v: (distMesosphere/speedCar)/60, f: String(Math.round((distMesosphere/speedCar)/60))},               {v: (distMesosphere/speedBike)/60, f: String(Math.round((distMesosphere/speedBike)/60))},              true],
          ['Thermosphere',      {v: distThermosphere,  f: String(Math.round(distThermosphere))},          {v: (distThermosphere/speedPlane)/60, f: String(Math.round((distThermosphere/speedPlane)/60))},               {v: (distThermosphere/speedCar)/60, f: String(Math.round((distThermosphere/speedCar)/60))},           {v: (distThermosphere/speedBike)/60, f: String(Math.round((distThermosphere/speedBike)/60))},         false],
          ['Exosphere',         {v: distExosphere,  f: String(Math.round(distExosphere))},                {v: (distExosphere/speedPlane)/60, f: String(Math.round((distExosphere/speedPlane)/60))},                     {v: (distExosphere/speedCar)/60, f: String(Math.round((distExosphere/speedCar)/60))},                 {v: (distExosphere/speedBike)/60, f: String(Math.round((distExosphere/speedBike)/60))},               false],
          ['Crust Depth',       {v: distCrust,  f: String(Math.round(distCrust))},                        {v: (distCrust/speedPlane)/60, f: String(Math.round((distCrust/speedPlane)/60))},                             {v: (distCrust/speedCar)/60, f: String(Math.round((distEpipelagiczone/speedCar)/60))},                {v: (distCrust/speedBike)/60, f: String(Math.round((distCrust/speedBike)/60))},                       true],
          ['Mantle',            {v: distMantle,  f: String(Math.round(distMantle))},                      {v: (distMantle/speedPlane)/60, f: String(Math.round((distMantle/speedPlane)/60))},                           {v: (distMantle/speedCar)/60, f: String(Math.round((distMantle/speedCar)/60))},                       {v: (distMantle/speedBike)/60, f: String(Math.round((distMantle/speedBike)/60))},                     true],
          ['Outer Core',        {v: distOutercore,  f: String(Math.round(distOutercore))},                {v: (distOutercore/speedPlane)/60, f: String(Math.round((distOutercore/speedPlane)/60))},                     {v: (distOutercore/speedCar)/60, f: String(Math.round((distOutercore/speedCar)/60))},                 {v: (distOutercore/speedBike)/60, f: String(Math.round((distOutercore/speedBike)/60))},               false],
          ['Inner Core',        {v: distInnercore,  f: String(Math.round(distInnercore))},                {v: (distInnercore/speedPlane)/60, f: String(Math.round((distInnercore/speedPlane)/60))},                     {v: (distInnercore/speedCar)/60, f: String(Math.round((distInnercore/speedCar)/60))},                 {v: (distInnercore/speedBike)/60, f: String(Math.round((distInnercore/speedBike)/60))},               false]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: false});
      };

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

  var allthelayers= [ 'Epipelagic', 'Mesopalegic', 'Bathyl', 'Abyssal', 'Hadal', 'Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere','Exosphere', 'Crust', 'Mantle', 'Outer Core', 'Inner Core'];
  var alldistances= [ distEpipelagiczone, distMesopalegiczone, distBathylzone, distAbyssalzone, distHadalzone, distTroposphere, distStratosphere, distMesosphere, distThermosphere, distExosphere, distCrust, distMantle, distOutercore, distInnercore];
  var inputarrayforchart = new Array;
  var atmoslayerforchart = new Array;
  var earthlayerforchart = new Array;
  var oceanlayerforchart = new Array;

  oceanlayerforchart.push(['Layer', 'Bike Time', 'Car Time']);
  for (i=0; i< 5; i++){
    oceanlayerforchart.push([allthelayers[i], Math.round(alldistances[i]/speedBike/60), Math.round(alldistances[i]/speedCar/60)]);
  };

  atmoslayerforchart.push(['Layer', 'Bike Time', 'Car Time']);
  for (i=5; i< 10; i++){
    atmoslayerforchart.push([allthelayers[i], Math.round(alldistances[i]/speedBike/60), Math.round(alldistances[i]/speedCar/60)]);
  };

  earthlayerforchart.push(['Layer', 'Bike Time', 'Car Time']);
  for (i=10; i< allthelayers.length; i++){
    earthlayerforchart.push([allthelayers[i], Math.round(alldistances[i]/speedBike/3600), Math.round(alldistances[i]/speedCar/3600)]);
  };

  inputarrayforchart[0] = google.visualization.arrayToDataTable(oceanlayerforchart);
  inputarrayforchart[1] = google.visualization.arrayToDataTable(earthlayerforchart);
  inputarrayforchart[2] = google.visualization.arrayToDataTable(atmoslayerforchart);

  var current = 0;

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  var button = document.getElementById('b1');

  var options = {
    vAxis: {title: 'Minutes', titleTextStyle: {color: 'red'}},
    hAxis: {title: 'Layer', titleTextStyle: {color: 'red'}},
    animation:{
        duration: 2000,
        easing: 'out'
      },
  };

  function drawChart() {
      // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
            button.value = 'Switch to ' + (current ? 'Atmosphere' : 'Ocean');
          });

        if (current == 0){
        options['title'] = 'Layers of the Ocean';
        options['vAxis'] = {title: 'Minutes', titleTextStyle: {color: 'red'}};
        } else if (current == 1) {
        options['title'] = 'Layers of the Earth' 
        options['vAxis'] = {title: 'Hours', titleTextStyle: {color: 'red'}};
        } else {
        options['title'] = 'Layers of the Atmosphere' 
        options['vAxis'] = {title: 'Minutes', titleTextStyle: {color: 'red'}}; 
        }

      chart.draw(inputarrayforchart[current], options);
    }
    drawChart();

    button.onclick = function() {
      if (current == 2){
        current = 0;
      } else {
        current = current + 1;
      }
      drawChart();
    }

}


$(document).ready(function() {

  var userLocation;
  var userLatLong;
  var phillyLatLong;
  var map;
  var oceanLayers = new L.LayerGroup();
  var earthLayers = new L.LayerGroup();
  var atmosLayers = new L.LayerGroup();
  var planetRadii = new L.LayerGroup();
  var phillystructure = new L.LayerGroup();


  var overlays = {
  "Atmosphere Layers": atmosLayers,
  "Ocean Layers": oceanLayers,
  "Earth Layers": earthLayers,
  "Planet Radii": planetRadii,
  "Philly Infrastructure": phillystructure
  };

  var baseLayers = {
  "Base Layers": map
  };





 $.get("http://ipinfo.io", function(response) {
    userLocation = response;
    userLatLong = response.loc.split(',');

    phillyLatLong = [39.9581, -75.1736];
    console.log('hi ' + phillyLatLong);
    map = L.map('map').setView(phillyLatLong, 8);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      center: phillyLatLong,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery <a href="http://mapbox.com">Mapbox</a>',
        zoomControl: false,
      id: 'examples.map-i875mjb7'
    }).addTo(map);

    
    L.marker(phillyLatLong).addTo(map).bindPopup("This is the location of <br> The Franklin Institute <br> Philadelphia, Pennsylvania").openPopup()
    
    L.marker(userLatLong).addTo(map).bindPopup("Your IP address says you are currently located at:<br /> " + userLocation.org + "<br/> " + userLocation.city + ", " + userLocation.region + ", " + userLocation.country + "<br>Note this could be off for Dynamic IPs.");


    L.circle(phillyLatLong, 1280000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This distance brings you to the exosphere. The main gases within the Earth's exosphere are the lightest atmospheric gases, mainly hydrogen, with some helium, carbon dioxide, and atomic oxygen near the base of the exosphere. Since there is no clear boundary between outer space and the exosphere, the exosphere is sometimes considered a part of outer space.");

    L.circle(phillyLatLong, 600000, {
      color: 'purple',
      fillColor: 'purple',
      fillOpacity: 0.4
    }).addTo(atmosLayers).bindPopup("Traveling this distance brings you to the thermosphere. Thermospheric temperatures increase with altitude due to absorption of highly energetic solar radiation. Even though the temperature is so high, one would not feel warm in the thermosphere, because it is so near vacuum that there is not enough contact with the few atoms of gas to transfer much heat. The International Space Station has a stable orbit within the middle of the thermosphere.");

    L.circle(phillyLatLong, 80000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("Traveling here would be the equivalent of going to the mesosphere. In the mesosphere, temperature decreases with increasing height. The upper boundary of the mesosphere is the mesopause, which can be the coldest naturally occurring place on Earth.");

   L.circle(phillyLatLong, 50000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This distance brings you to the stratosphere. Here, warmer layers higher up and cooler layers farther down. This is in contrast to the troposphere near the Earth's surface, which is cooler higher up and warmer farther down. Commercial airliners typically cruise in the stratosphere.");

    L.circle(phillyLatLong, 17000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the troposphere. The troposphere is the lowest portion of Earth's atmosphere. It contains approximately 80% of the atmosphere's mass and 99% of its water vapor and aerosols. Most of the phenomena we associate with day-to-day weather occur in the troposphere.");



    L.circle(phillyLatLong, 10911, {
      color: 'purple',
      fillColor: 'purple',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Hadal Zone. This is as deep as the ocean goes! The hadal zone (named after the realm of Hades, the underworld in Greek mythology) is the delineation for the deepest trenches in the ocean. It is believed that most life at this depth is sustained by marine snow or the chemical reactions around thermal vents. The low nutrient level and lack of sunlight create hostile living conditions in which few species are able to exist. As no sunlight reaches this layer of the ocean, deep sea creatures have reduced eyesight, with very large eyes for receiving only bioluminescent flashes. ")

    L.circle(phillyLatLong, 6000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Abyssal Zone. This zone remains in perpetual darkness and never receives daylight. Its permanent inhabitants (for example, the black swallower, deep-sea anglerfish and the giant squid) are able to withstand the immense pressures of the ocean depths, up to 76 megapascals (11,000 psi).");

    L.circle(phillyLatLong, 4000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Bathyal Zone. Because of the lack of light, some species here do not have eyes, however those possessing eyes in this zone include the viperfish and the frill shark. Many forms of nekton live in the bathyal zone, such as squid, large whales, and octopuses, but this zone is difficult for fish to live in. Sponges, brachiopods, sea stars, and echinoids are also common in the bathyal zone.");

   L.circle(phillyLatLong, 1000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Mesopelagic Zone, also known as the twilight zone. Although some light penetrates as deep as the mesopelagic zone, it is insufficient for photosynthesis. The general types of life forms found are daytime visiting herbivores, detritivores feeding on dead organisms and fecal pellets, and carnivores feeding on the former types. Examples of animals in the mesopelagic zone are: swordfish, squid, wolf eels, cuttlefish, and other semi-deepsea creatures.");
   
    L.circle(phillyLatLong, 200, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Epipelagic Zone. Any water in a sea or lake that is neither close to the bottom nor near the shore can be said to be in the pelagic zone. The word 'pelagic' is derived from Greek πέλαγος (pélagos), meaning 'open sea'. This is the illuminated zone at the surface of the sea where enough light is available for photosynthesis. Plants and animals are largely concentrated in this zone. Examples of organisms living in this zone are plankton, floating seaweed, jellyfish, tuna, many sharks and dolphins (!) .");
    L.control.layers(overlays).addTo(map);


    L.circle(phillyLatLong, 6378000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of core. Earth's inner core is Earth's innermost part and is a solid ball, according to seismological studies. (This is about 70% of the Moon's radius.) It is believed to consist primarily of an iron–nickel alloy and to be approximately the same temperature as the surface of the Sun: approximately 5700 K (5400 °C).");

    L.circle(phillyLatLong, 5150000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the outer core. Earth's outer core is a liquid layer composed of iron and nickel. Eddy currents in the nickel iron fluid of the outer core are believed to influence Earth's magnetic field.");

   L.circle(phillyLatLong, 2900000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the mantle. Earth's mantle is a silicate rocky shell that constitutes about 84% of Earth's volume. It is predominantly solid, but in geological time it behaves as a very viscous fluid.");

    L.circle(phillyLatLong, 30000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the crust. The crust occupies less than 1% of Earth's volume. The oceanic crust of the sheet is different from its continental crust. Oceanic crust is composed primarily of basalt, diabase, and gabbro. Continental crust is mostly composed of slightly less dense rocks than those of the oceanic crust. Some of these less dense rocks, such as granite, are common in the continental crust but rare to absent in the oceanic crust.");





    L.circle(phillyLatLong, 69911000, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Jupiter's radius.");

    L.circle(phillyLatLong, 58232000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Saturn's radius.");

    L.circle(phillyLatLong, 25362000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Uranus's radius.");

    L.circle(phillyLatLong, 24622000, {
      color: 'purple',
      fillColor: 'purple',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Neptune's radius.");

    L.circle(phillyLatLong, 6371000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Earth's radius.");

    L.circle(phillyLatLong, 6052000, {
      color: 'yellow',
      fillColor: 'yellow',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Venus's radius.");

    L.circle(phillyLatLong, 3390000, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Mars's radius.");

    L.circle(phillyLatLong, 2440000, {
      color: 'black',
      fillColor: 'black',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Mercury's radius.");

    L.circle(phillyLatLong, 1737000, {
      color: 'white',
      fillColor: 'white',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Earth's Moon's radius.");

    L.circle(phillyLatLong, 1184000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(planetRadii).bindPopup("This is the extent of Pluto's radius.");
    
    // Disable drag and zoom handlers.
    // map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();

    atmosLayers.addTo(map);


    
    var layer = L.esri.basemapLayer('NationalGeographic').addTo(map);
    var layerLabels;

    function setBasemap(basemap) {
      if (layer) {
        map.removeLayer(layer);
      }
      layer = L.esri.basemapLayer(basemap);
      map.addLayer(layer);
      if (layerLabels) {
        map.removeLayer(layerLabels);
      }

      if (basemap === 'ShadedRelief' || basemap === 'Oceans' || basemap === 'Gray' || basemap === 'DarkGray' || basemap === 'Imagery' || basemap === 'Terrain') {

        layerLabels = L.esri.basemapLayer(basemap + 'Labels');
        map.addLayer(layerLabels);
      }
    }

    var basemaps = document.getElementById('basemaps');

    basemaps.addEventListener('change', function(){
      setBasemap(basemaps.value);
    });   

    // var bikelayer = L.esri.featureLayer('http://gis.phila.gov/arcgis/rest/services/PhilaOIT-GIS_Transportation/MapServer/0', {
    // simplifyFactor: 0.25,
    // style: function(feature) {
    //   return {
    //     color: '#650DFF',
    //     weight: 2,
    //     opacity: 1
    //   }
    // }
    // }).addTo(phillystructure);
    

    var raillayer = L.esri.featureLayer('http://gis.phila.gov/arcgis/rest/services/PhilaOIT-GIS_Transportation/MapServer/1', {
    simplifyFactor: 0.25,
    style: function(feature) {
      return {
        color: '#FF0000',
        weight: 3,
        opacity: 1
      }
    }
    }).addTo(phillystructure);
    


    var cityboundlayer = L.esri.featureLayer('http://gis.phila.gov/arcgis/rest/services/PhilaOIT-GIS_Boundaries/MapServer/0', {
    simplifyFactor: 0.25,
    style: function(feature) {
      return {
        color: '#E86A0C',
        weight: 1,
        opacity: 1
      }
    }
    }).addTo(phillystructure);


  var popup = L.popup();
    
  var marker = new Array();

  // var trainIcon = L.icon({
  //   iconUrl: 'train-marker.png',
  //   shadowUrl: 'trainshadow.png',

  //   //iconSize:     [38, 95], // size of the icon
  //   //shadowSize:   [50, 64], // size of the shadow
  //   iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [0, 0],  // the same for the shadow
  //   popupAnchor:  [5, 10] // point from which the popup should open relative to the iconAnchor
  // });
  
  window.setInterval(function(){
  $.get("http://www3.septa.org/hackathon/TrainView", function(data) {
          
          for(i=0;i<marker.length;i++) {
              map.removeLayer(marker[i]);
              };  
                    
          console.log('all aboard ' + String(data[0].nextstop));
          var location;
          var onemarker;
          for (i = 0; i < data.length; i++) { 
                    location = [Number(data[i].lat), Number(data[i].lon)];
                    onemarker = L.marker(location).addTo(map).bindPopup(String(data[i].service) + " train # " + String(data[i].trainno) + "<br>Originated from " + String(data[i].SOURCE) + "<br> Next stop is " + String(data[i].nextstop) );
                    marker.push(onemarker);
                    map.addLayer(marker[i]);
            };
               
          }, "jsonp");
  }, 5000);

  }, "jsonp");

});





  