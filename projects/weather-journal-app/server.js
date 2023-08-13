// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app =express();

const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended :false}));


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
// Callback to debug
const server = app.listen( port, () => {
    console.log(`Server Is running on Port : ${port}`)
});

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.json(projectData);
  });



// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/website/index.html');

});










