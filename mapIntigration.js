var map, infoWindow;
function initMap() {
  var mapElement = document.createElement("div");
  mapElement.setAttribute("id", "map");
  var dialog = document.getElementById("dialog");
  dialog.appendChild(mapElement);
  var element = document.getElementById("map");
  // dialog.dialog({
  //   width:600,
  //   height:450,
  //   open:function(){
  //     var mapOptions={
  //       center: new google.maps.LatLng(19.0606917, 72.83624970000005),
  //       zoom: 18,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
  //      map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //   }
    
  // }
    
  // )
  dialog.style.height = '450';
  dialog.style.width = '600';
  mapElement.style.height = '450';
  mapElement.style.width = '600';

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 7.8731, lng: 80.7718 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  dialog.showModal();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}