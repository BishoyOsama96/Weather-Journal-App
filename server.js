// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
const {json} = require('body-parser');
const { request } = require('http');
const { response } = require('express');

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3080;
const server = app.listen(port,()=>{
    // logging the port to the console
    console.log(`runing localHost at port: ${port}`);
});

// GET Route I: Server Side
app.get('/all',(req,res)=>{
    // convert wearherData to json file
    const weatherData =json.stringify(projectData);
    // send data on projectData file
    res.send(weatherData);
    // just for test
    console.log(`data on route :
    ...
    ${weatherData}`);
});