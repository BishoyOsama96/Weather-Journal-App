/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '<your_api_key>&units=a86ddcd72bd031597483ce10ddb70d77';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// GET Route II: Client Side
const getData = async (baseURL,cityZipCode,apiKey)=>{
    // generate url from the api
    const response = await fetch(`${baseURL+cityZipCode+apiKey}`);

    try {
        // get data from the server and convert it to json
        const receivedData = await response.json();
        const temp = receivedData.main.temp;
        const cityName = receivedData.main.name;
        // return the temperature and city name
        return ({temp: temp, name: cityName});

    } 
    // hadell errors
    catch (error) {
        // appropriately handle the error
        console.log("there is an error: ",error);
    }

};