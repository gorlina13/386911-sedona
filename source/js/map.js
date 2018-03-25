"use strict";

function initMap() {
  var myLatLng = {lat: 34.854, lng: -111.830};
  var map = new google.maps.Map(document.querySelector(".map__area"), {
    zoom: 7,
    center: myLatLng
  });

  var pin = {
    url: "img/icon-map-marker.svg",
    scaledSize: new google.maps.Size(25, 25),
    size: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(12.5, 12.5)
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: pin
  });
}
