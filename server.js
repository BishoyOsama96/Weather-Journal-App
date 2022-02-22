// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

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
    const weatherData =JSON.stringify(projectData);
    // send data on projectData file
    res.send(weatherData);
    // just for test
    console.log(`data on route :
    ...
    ${weatherData}`);
});
// POST Route I: Server Side
app.post('/add',(req,res)=>{
    // send data to projectData
    projectData.temp =req.body.temp;
    projectData.date =req.body.date;
    projectData.feeling =req.body.feeling;
    // post the data to the file
    res.send(projectData);
    //test
    console.log('data received');
});
