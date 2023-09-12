const express = require('express');
const airports = require('./mock-data').airports;
const flights = require('./mock-data').flights;
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
const port = 4500;

app.use(cors());
app.use(express.json());

const rootUrl = '/api';
app.get(`${rootUrl}/getAirportList`, (req, res) => {
    res.json({ airports });
});

app.post(`${rootUrl}/searchFlights` , async (req, res) => {
    if(req.body.returnDate) {
        let availableFlights = flights.filter(flight => 
            (
                (
                    flight.origin_airport === req.body.origin.name
                    && 
                    flight.destination_airport === req.body.destination.name
                )
                ||
                (
                    flight.destination_airport === req.body.origin.name
                    &&
                    flight.origin_airport === req.body.destination.name
                )
            )
            &&
            (
                new Date(flight.flight_date).toDateString() === new Date(req.body.departure).toDateString()
                || 
                new Date(flight.flight_date).toDateString() === new Date(req.body.returnDate).toDateString()
            )
        );
        res.json({ availableFlights })
    }

    else {
        let availableFlights = flights.filter(flight => 
            flight.origin_airport === req.body.origin.name
            &&
            flight.destination_airport === req.body.destination.name
            &&
            new Date(flight.flight_date).toDateString() === new Date(req.body.departure).toDateString()
        );
        res.json({ availableFlights })
    }
})

app.listen(port, async () => {
  console.log(`Mock Server is running on port ${port}`);
});
