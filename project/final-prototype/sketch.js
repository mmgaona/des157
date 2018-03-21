
function initMap(){
  var options = {
    zoom: 15,
    center: {lat:38.5382, lng:-121.761},
    mapTypeId: 'roadmap'
  }

  var map = new google.maps.Map(document.getElementById('mapid'), options);

  var marker = new google.maps.Marker({
    position: {lat:38.5394447, lng:-121.75163780000002},
    map: map,
    icon:'images/handicap.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Student Community Center</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);

  });

}
