# ☕ Cafe Finder

A web application that helps you find cafes near any location using Google Maps.

## Features

- Interactive Google Maps integration
- Find cafes near your current location using browser geolocation
- Search cafes by city, street, or address
- Sidebar displaying cafe name, address, rating, and opening hours
- Click a cafe card to zoom into its location on the map
- Custom styled markers for each cafe result

## Getting Started

### Prerequisites

To run this project you will need a Google Maps API key with the following APIs enabled:

- Maps JavaScript API
- Places API
- Geocoding API
- Geometry Library

You can create a free API key at the [Google Cloud Console](https://console.cloud.google.com).
Note that Google requires a billing account, but provides ca. $200 of free credit per month
which is more than sufficient for personal projects. Test abo is 90 days.

### Installation

1. Clone the repository
```
    git clone https://github.com/JasonFlemingdIT2023/Cafe_Finder.git
```

2. Create a file named `config.js` in the root folder

3. Add your API key to `config.js`
```javascript
    const CONFIG = {
        apiKey: "YOUR_API_KEY_HERE"
    };
```

4. Open `index.html` with a local server such as Live Server in VS Code

Note: `config.js` is listed in `.gitignore` and will never be committed to the repository.
Your API key stays on your machine only.

## Usage

- On load, the map centers on Amsterdam and shows nearby cafes
- Use the search bar to find cafés in any city, street, or address
- Click "My Location" to find cafés near your current position
- Click any cafe card in the sidebar to zoom into that location on the map
- Click a marker on the map to see a popup with the cafe details

## Built With

- HTML, CSS, JavaScript
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding)
- [Google Geometry Library](https://developers.google.com/maps/documentation/javascript/geometry)

## License

This project is open source and available for personal and educational use.
