// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app =express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Spin up the server
// Callback to debug

const server = app.listen(port.listening);
function listening(){
     console.log('Server Is running on Port'+ port)
}

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/data', (req, res) =>{
    res.json(projectData);
  });

// Post Route

app.post('/data', (req, res) => {
  const { temperature, date, userResponse } = req.body; // Extract data from request body

  // Add data to the projectData object with keys
  projectData.temperature = temperature;
  projectData.date = date;
  projectData.userResponse = userResponse;

  // Respond with a success message or any relevant data if needed
  res.json({ message: 'Data added successfully' });
});
