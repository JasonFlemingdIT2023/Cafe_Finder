# ☕ Café Finder

A web application that helps you find cafés near any location using Google Maps.

## Features

- Interactive Google Maps integration
- Find cafés near your current location using browser geolocation
- Search cafés by city, street, or address
- Sidebar displaying café name, address, rating, and opening hours
- Click a café card to zoom into its location on the map
- Custom styled markers for each café result

## Getting Started

### Prerequisites

To run this project you will need a Google Maps API key with the following APIs enabled:

- Maps JavaScript API
- Places API
- Geocoding API
- Geometry Library

You can create a free API key at the [Google Cloud Console](https://console.cloud.google.com).
Note that Google requires a billing account, but provides $200 of free credit per month
which is more than sufficient for personal projects.

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