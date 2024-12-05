const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');  
const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:4200'  
}));

app.use(bodyParser.json());

app.post('/message', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error communicating with Rasa server');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
