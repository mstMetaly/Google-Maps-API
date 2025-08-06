require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3010;

// Serve static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get API key (for frontend geocoding)
app.get('/api/get-api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// API endpoint to fetch hospitals
app.get('/api/nearby-hospitals', async (req, res) => {
    const { latitude, longitude, radius = 5000 } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    console.log("lat:", latitude, "longitude:", longitude);

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospital&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const hospitals = response.data.results.map((hospital) => ({
            name: hospital.name,
            location: hospital.geometry.location,
            address: hospital.vicinity,
        }));
        console.log("response,",hospitals);

        res.json(hospitals);
    } catch (error) {
        console.error('Error fetching nearby hospitals:', error.message);
        res.status(500).json({ error: 'Failed to fetch nearby hospitals.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
