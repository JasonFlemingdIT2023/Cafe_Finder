let map;
let service;
let infoWindow;
let markers=[];

function initMap() {
    const amsterdam = { lat: 52.3676, lng: 4.9041 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: amsterdam,
        zoom: 14,
    });

    infoWindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    searchCafes(amsterdam);
}

function searchCafes(location) {
     clearMarkers();
     document.getElementById("results-list").innerHTML = "<p style='color:#888'>Search...</p>";
     
     const request = {
        location: location,
        radius: 1000,
        type: "cafe"
     };

     service.nearbySearch(request, function(results, status){
        if (status === google.maps.places.PlacesServiceStatus.OK) {
           document.getElementById("results-list").innerHTML= "";
           results.forEach(function(place){
            createMarker(place);
            createCard(place);
           });
        } else {
            document.getElementById("results-list").innerHTML = "<p style='color:#c8956c'>No cafes found.</p>";
        }
     });
}