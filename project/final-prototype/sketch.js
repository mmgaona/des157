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
  controlUI.style.marginTop = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(85,150,205)';
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
    streetViewControl: false,
    mapTypeId: 'roadmap'
  }


  var map = new google.maps.Map(document.getElementById('mapid'), options);

  var marker = new google.maps.Marker({
    position: {
      lat: 38.5394447,
      lng: -121.75163780000002
    },
    map: map,
    icon: 'images/handicaplogo.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Student Community Center</h1><br><a href="scc.html"><img src="images/sccmappic.png" width=500px alt="scc"></a><p><strong>397 Hutchison Dr</strong><br>Click for accessibility options</p>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);

  });


  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
