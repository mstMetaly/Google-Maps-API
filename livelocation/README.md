# LiveLocation - Full-Stack Real-Time Tracking

A production-ready, full-stack real-time location tracking system with backend API and frontend interface. This implementation provides secure, scalable location monitoring with proper API key management.

## 🎯 Features

- **Express.js Backend**: Secure API key management and proxy services
- **Real-time GPS Tracking**: Continuous location monitoring with high accuracy
- **Address Resolution**: Detailed location information (city, district, region, country)
- **Scalable Architecture**: Client-server separation for better security
- **Environment Variables**: Secure API key storage
- **CORS Support**: Cross-origin request handling

## 🏗️ Architecture

- **Backend**: Node.js + Express.js server
- **Frontend**: Vanilla JavaScript + HTML
- **APIs**: Google Maps Geocoding API
- **Security**: Environment variables for API key management
- **Port**: 3000 (configurable)

## 📁 Files

| File | Description |
|------|-------------|
| `server.js` | Express.js backend server with API endpoints |
| `index.html` | Frontend with backend integration |
| `package.json` | Node.js dependencies and scripts |
| `.gitignore` | Excludes `node_modules/` and `.env` |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Google Maps API Key
- Modern web browser with geolocation support

### Installation

1. **Install dependencies**
   ```bash
   cd livelocation
   npm install
   ```

2. **Configure environment**
   ```bash
   # Create .env file
   echo "GOOGLE_API_KEY=your_api_key_here" > .env
   echo "PORT=3000" >> .env
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Backend API: `http://localhost:3000`
   - Frontend: Open `index.html` in browser

## 📡 API Endpoints

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

### Reverse Geocoding
```
GET /api/reverse-geocode?lat={latitude}&lng={longitude}
```
Converts GPS coordinates to detailed address information.

**Parameters:**
- `lat` (required): Latitude coordinate
- `lng` (required): Longitude coordinate

**Response:**
```json
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "City Name",
          "short_name": "CN",
          "types": ["locality"]
        }
      ]
    }
  ]
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Google Maps API Configuration
GOOGLE_API_KEY=your_google_maps_api_key_here

# Server Configuration
PORT=3000
```

### Getting Google Maps API Key
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Geocoding API
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

## 🛡️ Security Features

- **API Key Protection**: API keys stored in environment variables
- **Backend Proxy**: All Google API calls go through the backend
- **Input Validation**: Server-side validation of coordinates
- **CORS Support**: Cross-origin requests enabled
- **Error Handling**: Secure error responses without exposing sensitive data

## 🎨 Frontend Features

- **Real-time GPS Tracking**: Continuous location monitoring
- **High Accuracy**: GPS optimization for precise location
- **Address Resolution**: Detailed location information
- **Error Handling**: Clear error messages for users
- **Responsive Design**: Works on desktop and mobile devices

## 🔄 Workflow

1. **Frontend**: Gets user's GPS coordinates using browser geolocation
2. **Backend**: Receives coordinates and calls Google Geocoding API
3. **Google API**: Returns detailed address information
4. **Backend**: Processes and returns structured data
5. **Frontend**: Displays location details to user

## 🎯 Use Cases

Perfect for:
- **Real-time Location Tracking**: Continuous GPS monitoring
- **Address Resolution**: Converting coordinates to addresses
- **Location-based Applications**: Apps requiring precise location
- **Production Services**: Scalable location tracking solutions
- **API Integration**: Backend services for other applications

## 🚨 Error Handling

The application handles various error scenarios:
- **Invalid Coordinates**: Validation and error messages
- **API Failures**: Graceful handling of Google API errors
- **Network Issues**: User-friendly network error messages
- **Missing Parameters**: Server-side validation

## 🛠️ Development

### Running in Development Mode
```bash
npm run dev
```

### Project Structure Details
- **`server.js`**: Main Express server with API endpoints
- **`index.html`**: Frontend with backend integration
- **`package.json`**: Dependencies and scripts
- **`.env`**: Environment variables (not in git)
- **`.gitignore`**: Excludes `node_modules/` and `.env`

### Dependencies
- **express**: Web server framework
- **axios**: HTTP client for API calls
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 🔍 API Response Examples

### Successful Geocoding Response
```json
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "Dhaka",
          "short_name": "Dhaka",
          "types": ["locality"]
        },
        {
          "long_name": "Dhaka Division",
          "short_name": "Dhaka Division",
          "types": ["administrative_area_level_1"]
        },
        {
          "long_name": "Bangladesh",
          "short_name": "BD",
          "types": ["country"]
        }
      ]
    }
  ]
}
```

## 🚀 Deployment

### Production Considerations
- Use HTTPS for geolocation
- Set up proper CORS policies
- Implement rate limiting
- Monitor API usage
- Set up logging and monitoring

### Environment Setup
```bash
# Production environment variables
GOOGLE_API_KEY=your_production_api_key
PORT=3000
NODE_ENV=production
```

---

**Part of the Google Maps API Collection** 