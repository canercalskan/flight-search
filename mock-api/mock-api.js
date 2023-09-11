const express = require('express');
const airports = require('./mock-data')
const cors = require('cors');

const app = express();
const port = 4500;

app.use(cors());

app.get('/api/getAirportList', (req, res) => {
    res.json({ airports });
});

app.listen(port, async () => {
  console.log(`Mock Server is running on port ${port}`);
});
