var ucDavis = {
  lat: 38.5382,
  lng: -121.761
};

function CenterControl(controlDiv, map) {

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '15px';
  controlUI.style.boxShadow = '0 3px 6px rgba(0,0,0,.5)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginTop = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,125,220)';
  controlText.style.fontFamily = 'Helvetica, sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingTop = '3px';
  controlText.style.paddingBottom = '3px';
  controlText.style.paddingLeft = '8px';
  controlText.style.paddingRight = '8px';
  controlText.innerHTML = 'UC Davis';
  controlUI.appendChild(controlText);

  controlUI.addEventListener('click', function() {
  map.setCenter(ucDavis);
  map.setZoom(15);

  });

}


function initMap() {
  var options = {
    zoom: 15,
    center: ucDavis,
    mapTypeId: 'roadmap'
  }

  var map = new google.maps.Map(document.getElementById('mapid'), options);

  var marker = new google.maps.Marker({
    position: {
      lat: 38.5394447,
      lng: -121.75163780000002
    },
    map: map,
    icon: 'images/handicap.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Student Community Center</h1>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);

  });


  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

}
