
// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Simple route to test the body-parser
app.post('/submit', (req, res) => {
  // Access the parsed body data
  const { name, age } = req.body;
  res.send(`Received data - Name: ${name}, Age: ${age}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});