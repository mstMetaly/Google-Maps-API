# Google Maps API Collection

A comprehensive collection of Google Maps API implementations and location-based services designed to simplify geospatial application development. This repository houses various tools and utilities for integrating Google Maps functionality into web and mobile applications.

## 🌟 Features

- **Static Location Services**: Basic location utilities for address geocoding, reverse geocoding, and coordinate management
- **Real-time Location Tracking**: Live location monitoring and tracking capabilities for dynamic applications
- **Map Integration Tools**: Ready-to-use components for embedding Google Maps into web applications
- **Geospatial Utilities**: Helper functions for distance calculations, route planning, and location-based queries
- **API Key Management**: Secure configuration patterns for handling Google Maps API credentials

## 📁 Repository Structure

```
Maps/
├── location/           # Static location services (client-side only)
│   ├── index.html     # Live location tracker with Google Maps
│   ├── index2.html    # GPS location monitor (browser-based)
│   └── test.js        # Reverse geocoding utility
├── livelocation/      # Full-stack real-time location tracking
│   ├── server.js      # Express.js backend server
│   ├── index.html     # Frontend with backend integration
│   ├── package.json   # Node.js dependencies
│   └── .gitignore     # Backend-specific exclusions
└── .gitignore         # Main repository exclusions
```

## 🚀 Quick Start

### Prerequisites
- Google Maps API Key
- Node.js (for livelocation folder)
- Modern web browser with geolocation support

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Google-Maps-API.git
   cd Google-Maps-API
   ```

2. **Get Google Maps API Key**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API and Geocoding API
   - Create credentials (API Key)

3. **Configure API Keys**
   - For `location/` folder: Replace API keys in HTML files
   - For `livelocation/` folder: Create `.env` file with your API key

## 📂 Location Folder (Static Services)

**Client-side only implementations for basic location services.**

### Features:
- **Reverse Geocoding**: Convert GPS coordinates to human-readable addresses
- **Live Location Tracker**: Real-time GPS tracking with Google Maps integration
- **GPS Location Monitor**: Browser-based location monitoring without maps

### Usage:
1. Open any HTML file in a web browser
2. Allow location permissions when prompted
3. View real-time coordinates and address information

### Files:
- `index.html` - Interactive map with live location tracking
- `index2.html` - GPS coordinates display with high accuracy
- `test.js` - Reverse geocoding utility functions

## 📂 LiveLocation Folder (Full-Stack)

**Production-ready, full-stack location tracking system with backend API.**

### Features:
- **Express.js Backend**: Secure API key management and proxy services
- **Real-time GPS Tracking**: Continuous location monitoring
- **Address Resolution**: Detailed location information (city, district, region, country)
- **Scalable Architecture**: Client-server separation for better security

### Setup:
1. **Install dependencies**
   ```bash
   cd livelocation
   npm install
   ```

2. **Configure environment**
   ```bash
   # Create .env file
   echo "GOOGLE_API_KEY=your_api_key_here" > .env
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Backend API: `http://localhost:3000`
   - Frontend: Open `index.html` in browser

### API Endpoints:
- `GET /reverse-geocode?lat={latitude}&lng={longitude}` - Convert coordinates to address

### Files:
- `server.js` - Express.js backend server
- `index.html` - Frontend with backend integration
- `package.json` - Node.js dependencies
- `.gitignore` - Excludes `node_modules/` and `.env`

## 🔧 Configuration

### Environment Variables (livelocation folder)
```env
GOOGLE_API_KEY=your_google_maps_api_key_here
```

### API Keys Required
- **Maps JavaScript API**: For map visualization
- **Geocoding API**: For address conversion
- **Geolocation API**: For precise location detection

## 🛡️ Security

- API keys are stored in `.env` files (not committed to git)
- CORS enabled for cross-origin requests
- Input validation on all API endpoints
- Secure error handling without exposing sensitive data

## 🎯 Use Cases

Perfect for developers working on:
- Location-based mobile apps
- Delivery and logistics platforms
- Travel and navigation applications
- Real estate and property management systems
- Event management with location services
- Fleet tracking and management solutions

## 📝 API Reference

### Reverse Geocoding Response
```json
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "City Name",
          "short_name": "CN",
          "types": ["locality"]
        },
        {
          "long_name": "District Name",
          "short_name": "DN",
          "types": ["administrative_area_level_2"]
        }
      ]
    }
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
- Check the existing issues
- Create a new issue with detailed description
- Include browser console errors if applicable

## 🔄 Version History

- **v1.0.0** - Initial release with location and livelocation services
- Added static location utilities
- Added full-stack real-time tracking
- Implemented secure API key management

---

**Built with ❤️ using Google Maps API** 