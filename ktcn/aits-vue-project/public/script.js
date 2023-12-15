let map;
let markers = {};

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.05140358062961, lng: 105.87589970495395 },
    zoom: 8,
  });

  addMarker('marker1', { lat: 21.05140358062961, lng: 105.87589970495395 });
  addMarker('marker2', { lat: 16.082782567023603, lng: 108.21429443248654 });
  addMarker('marker3', { lat: 10.81154650109763, lng: 106.66234648682756 });
}

function addMarker(id, location) {
    // Adds a marker to the map and into the markers object
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
    });
  
    markers[id] = marker;
    console.log('worked');
  }
  
  function toggleBounce(markerId) {
    // Stops any currently bouncing markers and bounces the clicked one
    Object.keys(markers).forEach(key => {
      markers[key].setAnimation(null);
    });
  
    const marker = markers[markerId];
    if (marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      // Center the map on the marker
      map.panTo(marker.getPosition());
    }
  }
  
  // Set click listeners on span tags after the DOM has fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contact-address-info-text').forEach(item => {
        console.log('worked');
      item.addEventListener('click', function() {
        const markerId = this.getAttribute('data-id');
        toggleBounce(markerId);
      });
    });
  });
  
  // Initialize map after the window has loaded to ensure Google Maps API is ready
  window.onload = initMap;

initMap();
