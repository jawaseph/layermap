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


// $.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=AIzaSyDYYpfEtNISrR6M7Jb3C_4S2zwN_I5Tnf0" , function(json) {
//                console.log(json)}, 'jsonp');

 // Load the Visualization API and the controls package.
google.load('visualization', '1.0', {'packages':['controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {

// Create our data table.
var data = google.visualization.arrayToDataTable([
  ['Distance', 'Atmosphere', 'Ocean', 'Earth'],
  [.2,    10,  10, 1 ],
  [1,     20,  13, 12 ],
  [4,     30,  24, 10 ],
  [6,     40,  50, 91 ],
  [11,    80,  60, 48 ],
  [17,    40,  70, 32 ],
  [30,    30,  80, 71 ],
  [50,    10,  70, 91 ],
  [80,    10,  10, 52 ],
  [640,   1,  0, 41  ],
  [1280,  0,  0, 73  ],
  [2900,  0,  0, 100  ],
  [5150,  0,  0, 20  ],
  [6378,  0,  0, 20 ]
]);

// Create a dashboard.
var dashboard = new google.visualization.Dashboard(
    document.getElementById('dashboard_div'));

// Create a range slider, passing some options
var RangeSlider = new google.visualization.ControlWrapper({
  'controlType': 'ChartRangeFilter',
  'containerId': 'filter_div',
  'options': {
    'filterColumnLabel': 'Distance',
    'ui.snapToData': true
  }
});

// Create a pie chart, passing some options
var pieChart = new google.visualization.ChartWrapper({
  'chartType': 'ScatterChart',
  'chartOptions': {pointSize: 10},
  'chartArea': {'height': '100%'},
  'containerId': 'chart_div',
  'options': {
    animation:{
      duration: 2000,
      easing: 'out',
      curveType: 'function',
      },
    'legend': 'top',
  }
});

// Establish dependencies, declaring that 'filter' drives 'pieChart',
// so that the pie chart will only display entries that are let through
// given the chosen slider range.
dashboard.bind(RangeSlider, pieChart);

// Draw the dashboard.
dashboard.draw(data);
}



http://gis.phila.gov/arcgis/rest/services/PhilaOIT-GIS_Transportation/MapServer/2
http://www3.septa.org/hackathon/TrainView/