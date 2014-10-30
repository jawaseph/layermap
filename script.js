console.log("javascript working!"); // Just to test. 


$(document).ready(function() {

  var userLocation;
  var userLatLong;
  var map;
  var oceanLayers = new L.LayerGroup();
  var earthLayers = new L.LayerGroup();
  var atmosLayers = new L.LayerGroup();

  

  var overlays = {
  "Atmosphere Layers": atmosLayers,
  "Ocean Layers": oceanLayers,
  "Earth Layers": earthLayers
  };

  var baseLayers = {
  "Base Layers": map
  };


 $.get("http://ipinfo.io", function(response) {
    userLocation = response;
    userLatLong = response.loc.split(',');
    console.log('hi ' + userLatLong);
    map = L.map('map').setView(userLatLong, 6);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery <a href="http://mapbox.com">Mapbox</a>',
      id: 'examples.map-i875mjb7'
    }).addTo(map);
        L.marker(userLatLong).addTo(map)
      .bindPopup("<b>You are currently located at:</b><br /> " + userLocation.org + "<br/> " + userLocation.city + ", " + userLocation.region + ", " + userLocation.country ).openPopup();

    L.circle(userLatLong, 1280000, {
      color: 'purple',
      fillColor: 'purple',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the exosphere.")

    L.circle(userLatLong, 640000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the ionosphere.");

    L.circle(userLatLong, 80000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the mesosphere. Over 99% of the atmosphere is below this point.");

   L.circle(userLatLong, 50000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the stratosphere.");

    L.circle(userLatLong, 17000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(atmosLayers).bindPopup("This is the extent of the troposphere.");



    L.circle(userLatLong, 10911, {
      color: 'purple',
      fillColor: 'purple',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Hadalpelagic Zone. The deepest part of the ocean.")

    L.circle(userLatLong, 6000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Abyssopelagic Zone.");

    L.circle(userLatLong, 4000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Bathypelagic Zone.");

   L.circle(userLatLong, 1000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Mesopelagic Zone.");
   
    L.circle(userLatLong, 200, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(oceanLayers).bindPopup("This is the extent of the Epipelagic Zone.");
    L.control.layers(overlays).addTo(map);



    L.circle(userLatLong, 6378000, {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of core.");

    L.circle(userLatLong, 5150000, {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the outer core.");

   L.circle(userLatLong, 2900000, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the mantle.");

    L.circle(userLatLong, 30000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(earthLayers).bindPopup("This is the extent of the crust.");

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }

    map.on('click', onMapClick);

  }, "jsonp");

});




