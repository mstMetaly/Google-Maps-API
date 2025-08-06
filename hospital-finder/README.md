# Hospital Finder - Google Maps API

A web application that helps users find nearby hospitals using Google Maps APIs. The application provides both a user-friendly web interface and a RESTful API for hospital location services.

## 🏥 Features

- **Place Name Search**: Enter any location name (city, address, landmark) to find nearby hospitals
- **Geocoding**: Automatic conversion of place names to GPS coordinates
- **Hospital Discovery**: Find all hospitals within a specified radius
- **Detailed Information**: Hospital name, address, and exact coordinates
- **Google Maps Integration**: Direct links to view hospitals on Google Maps
- **Customizable Search**: Adjustable search radius (1km to 50km)
- **RESTful API**: Backend API for integration with other applications

## 🏗️ Architecture

- **Backend**: Node.js + Express.js server
- **Frontend**: Vanilla JavaScript + HTML
- **APIs**: Google Maps Geocoding API + Places API
- **Security**: Environment variables for API key management

## 📁 Project Structure

```
Map/
├── server.js          # Express.js backend server
├── package.json       # Node.js dependencies
├── .env              # Environment variables (API keys)
├── .gitignore        # Git exclusions
├── README.md         # This file
└── public/
    └── index.html    # Frontend web interface
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Google Maps API Key with the following APIs enabled:
  - Maps JavaScript API
  - Geocoding API
  - Places API

### Installation

1. **Clone or download the project**
   ```bash
   cd Map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file with your API key
   echo "GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here" > .env
   echo "PORT=3010" >> .env
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the application**
   - Web Interface: `http://localhost:3010`
   - API Endpoint: `http://localhost:3010/api/nearby-hospitals`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Google Maps API Configuration
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Server Configuration
PORT=3010
```

### Getting Google Maps API Key

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

## 📡 API Reference

### Get API Key
```
GET /api/get-api-key
```
Returns the Google Maps API key for frontend use.

**Response:**
```json
{
  "apiKey": "your_api_key_here"
}
```

### Find Nearby Hospitals
```
GET /api/nearby-hospitals?latitude={lat}&longitude={lng}&radius={radius}
```

**Parameters:**
- `latitude` (required): Latitude coordinate
- `longitude` (required): Longitude coordinate
- `radius` (optional): Search radius in meters (default: 5000)

**Response:**
```json
[
  {
    "name": "Hospital Name",
    "location": {
      "lat": 23.8103,
      "lng": 90.4125
    },
    "address": "Hospital Address"
  }
]
```

## 🎯 Usage Examples

### Web Interface

1. Open `http://localhost:3010` in your browser
2. Enter a place name (e.g., "Dhaka, Bangladesh")
3. Set the search radius (optional, default: 5000 meters)
4. Click "Fetch Hospitals"
5. View results with hospital details and map links

### API Usage

```javascript
// Find hospitals near a specific location
const response = await fetch('/api/nearby-hospitals?latitude=23.8103&longitude=90.4125&radius=5000');
const hospitals = await response.json();
console.log(hospitals);
```

## 🛡️ Security Features

- **API Key Protection**: API keys stored in environment variables
- **Backend Proxy**: All Google API calls go through the backend
- **Input Validation**: Server-side validation of coordinates and parameters
- **CORS Support**: Cross-origin requests enabled for frontend integration
- **Error Handling**: Secure error responses without exposing sensitive data

## 🎨 Frontend Features

- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Search**: Instant results as you type
- **Interactive Results**: Click to view hospitals on Google Maps
- **User-friendly Interface**: Simple and intuitive design
- **Error Handling**: Clear error messages for users

## 🔍 Search Capabilities

### Supported Input Types:
- **City Names**: "New York", "London", "Tokyo"
- **Addresses**: "123 Main St, City, Country"
- **Landmarks**: "Times Square", "Eiffel Tower"
- **Coordinates**: Direct latitude/longitude input

### Search Radius Options:
- **1km**: Very local search
- **5km**: Neighborhood search (default)
- **10km**: City area search
- **25km**: Metropolitan area search
- **50km**: Regional search

## 🚨 Error Handling

The application handles various error scenarios:

- **Invalid Place Names**: Clear error messages for unrecognized locations
- **API Failures**: Graceful handling of Google API errors
- **Network Issues**: User-friendly network error messages
- **Missing Parameters**: Validation for required fields

## 🎯 Use Cases

Perfect for:
- **Emergency Services**: Quick hospital location during emergencies
- **Medical Tourism**: Find hospitals in specific destinations
- **Healthcare Planning**: Research hospital availability in areas
- **Travel Preparation**: Locate medical facilities before travel
- **Healthcare Apps**: Integration into larger healthcare applications

## 🛠️ Development

### Running in Development Mode
```bash
npm run dev
```

### Project Structure Details

- **`server.js`**: Main Express server with API endpoints
- **`public/index.html`**: Frontend web interface
- **`package.json`**: Dependencies and scripts
- **`.env`**: Environment variables (not in git)
- **`.gitignore`**: Git exclusions for security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:
- Check the existing issues
- Create a new issue with detailed description
- Include browser console errors if applicable

## 🔄 Version History

- **v1.0.0** - Initial release
  - Hospital finder with place name search
  - Google Maps integration
  - RESTful API endpoints
  - Secure API key management

---

**Built with ❤️ using Google Maps API** 