// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log("Server is running..");
    console.log(`running on port ${port}`);
}

//GET route
app.get('/all', getData);

function getData(request, response) {
    console.log("GET request received");
    response.send(projectData);
}

//POST Route
const data = []; //first I create an empty array to hold data
app.post('/add', addData);

function addData(request, response) {
    projectData.temp = request.body.temp;
    projectData.date = request.body.date;
    projectData.user_response = request.body.user_response;
    console.log("POST request received");
    response.send(projectData);
}