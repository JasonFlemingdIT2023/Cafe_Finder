let map;
let service;
let infoWindow;
let markers=[];

//Initialization of the map and listener for buttons and input
function initMap() {
    const amsterdam = { lat: 52.3676, lng: 4.9041 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: amsterdam,
        zoom: 14,
    });

    infoWindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    searchCafes(amsterdam);

    document.getElementById("search-button").addEventListener("click", function(){
        const query = document.getElementById("search-input").value;
        if (!query) return;
        geocodeAndSearch(query);
    });

    document.getElementById("search-input").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            document.getElementById("search-btn").click();
        }
    });

    document.getElementById("location-button").addEventListener("click", function() {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported...");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                const loc = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                map.setCenter(loc);
                searchCafes(loc);
            },
            function() {
                alert("Could not find location.");
            }
        );
    });
}

//cafe search, also with Places API
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

//create own marker
function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#c8956c",
            fillOpacity: 1,
            strokeColor: "#fff",
            strokeWeight: 2,
        }
    });

    marker.addListener("click", function() {
        infoWindow.setContent(`
            <div style="color:#1a1a2e; padding: 4px;">
                <strong>${place.name}</strong><br>
                ${place.vicinity}<br>
                ${place.rating ? "⭐ " + place.rating : ""}
            </div>
        `);
        infoWindow.open(map,marker);
    });

    markers.push(marker);
}

//dynamic cafe cards
function createCard(place){
    const list = document.getElementById("reults-list");
    const card = document.createElement("div");
    card.className = "cafe-card";

    card.innerHTML = `
        <h3>${place.name}</h3>
        <p>${place.vicinity}</p>
        ${place.rating ? `<p class="rating">⭐ ${place.rating} / 5</p>` : ""}
        ${place.opening_hours ? `<p style="color: ${place.opening_hours.open_now ? "#6fcf97" : "#eb5757"}; margin-top:4px; font-size:0.8rem">
            ${place.opening_hours.open_now ? "✓ COpen Now" : "✗ Closed"}
        </p>` : ""}
    `;

    card.addEventListener("click", function(){
        map.setCenter(place.geometry.location);
        map.setZoom(16);
    });

    list.appendChild(card);
}

function clearMarkers() {
    markers.forEach(function(marker){
        marker.setMap(null);
    });
    markers = [];
}

//Geocoding API is important
function geocodeAndSearch(query) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: query}, function(results, status){
        if (status === "OK") {
            const loc = results[0].geometry.location;
            map.setCenter(loc);
            searchCafes({ lat: loc.lat(), lng: loc.lng() }); 
        } else {
            alert("Location not found.");
        }
    });
}

