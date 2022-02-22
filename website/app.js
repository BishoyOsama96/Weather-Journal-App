const { response } = require("express");

/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let data = null ;
// Personal API Key for OpenWeatherMap API
const apiKey = '<your_api_key>&units=a86ddcd72bd031597483ce10ddb70d77';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// GET Route II: Client Side
const getData = async (baseURL,cityZipCode,apiKey)=>{
    // generate url from the api
    const response = await fetch(baseURL+cityZipCode+apiKey);

    try {
        // get data from the server and convert it to json
        data = await response.json();
        const temp = data.main.temp;
        const cityName = data.main.name;
        // return the temperature and city name
        return ({temp: temp, name: cityName});

    } 
    // hadell errors
    catch (error) {
        // appropriately handle the error
        console.log("there is an error: ",error);
    }

};
// POST Route II: Client Side
const PostData = async (url = '',projectData={})=>{
    const response =await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(projectData)
    });
    try {
        data = await response.json();
        return(data);
    }
     catch (error) {
        // appropriately handle the error
        console.log('there is an error: '+error);
    }
};
// event listener to an existing HTML button from DOM using Vanilla JS
//button onClick listener
document.getElementById('generate').addEventListener('click',()=>{
    // save user`s zip code
    const cityZipCode = document.getElementById('zip').value;
    // save user`s feelings
    const userFeelings = document.getElementById('feelings').value;
    // access the API
    getData(baseURL,cityZipCode,apiKey)
    // using chain promises to update data
    .then((addData)=>{
        // return the data to the server
        PostData('/add',{temp:addData,data:newDate,feeling:userFeelings});
    })
});