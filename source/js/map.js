'use strict';

function initMap() {
  var ZOOM = 7;
  var TITLE = 'Седона';

  var LAT_LNG = {
    lat: 34.868162,
    lng: -111.764224
  };

  var MAP_OPTIONS = {
    zoom: ZOOM,
    center: LAT_LNG,
    scrollwheel: false
  };

  var PIN_OPTIONS = {
    url: 'img/icon-map-marker.svg',
    width: 27,
    height: 27,
    originX: 0,
    originY: 0,
    anchorX: 13.5,
    anchorY: 13.5
  }

  var mapCanvas = document.querySelector('.map__interactive-area');

  if (mapCanvas !== null) {
    var map = new google.maps.Map(mapCanvas, MAP_OPTIONS);

    var pin = {
      url: PIN_OPTIONS.url,
      size: new google.maps.Size(PIN_OPTIONS.width, PIN_OPTIONS.height),
      origin: new google.maps.Point(PIN_OPTIONS.originX, PIN_OPTIONS.originY),
      anchor: new google.maps.Point(PIN_OPTIONS.anchorX, PIN_OPTIONS.anchorY),
      scaledSize: new google.maps.Size(PIN_OPTIONS.width, PIN_OPTIONS.height)
    };

    var marker = new google.maps.Marker({
      position: LAT_LNG,
      map: map,
      title: TITLE,
      icon: pin
    });
  }
}
