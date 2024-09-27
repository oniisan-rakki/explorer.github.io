const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Reservation model
const ReservationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    country: String,
    guests: Number,
    arrivalDate: Date,
    departureDate: Date,
    totalAmount: Number,
    roomType: String,
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Booking API is running!');
});

// Fetch available rooms from Cloudbeds API
app.get('/api/rooms', async (req, res) => {
    const { check_in, check_out, adults } = req.query;

    try {
        const response = await axios.get('https://api.cloudbeds.com/getAvailableRooms', {
            headers: {
                'Authorization': `Bearer ${process.env.CLOUDBEDS_API_KEY}`,
            },
            params: {
                check_in,
                check_out,
                adults,
            },
        });
        res.json(response.data.rooms); // Adjust according to your API response structure
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ error: 'Error fetching rooms' });
    }
});

// Post reservation
app.post('/api/reservations', async (req, res) => {
    const reservation = new Reservation(req.body);
    try {
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        console.error('Error saving reservation:', error);
        res.status(400).json({ error: 'Error saving reservation' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
