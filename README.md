# Weather-Journal App Project

Weather app using openWeatherMap API and asyncoronus JavaScript

## Table of Contents

* [Weather-Journal App Project](#weather-journal-app-project)
* [Table of Contents](#table-of-contents)
* [Instructions](#instructions)
* [Development](#development)
* [Helping Resources](#helping-resources)
* [Credits](#credits)

## Instructions
to be able to run the application you need to  Install node.js , express , cors and body-parser.

* you can install nodeJs form it`s [official website](https://nodejs.org/en/)
* after that head to the app directory and open command line to install dependencies like that :
  
```bash
npm install express
npm install cors
npm install body-parser
```
* then you can run the server locally using command line :

```bash
node server.js
```
you should get a response like this

```text
runing localHost at port: 3080
```
then in your browser navigate to

```link
http://localhost:3080/
```
* after that you can easily access the app
  
## Development

* server is built locally with node and express.

* all files are available in the /website folder with the exception of server.js (available in root directory) .

* weather data is fetched from [OpenWeatherMap](https://openweathermap.org) API .

* server includes an asynchronous get route to fetch data and an asynchronous post route to save data to the server from client side .
  
* server logs data fetched to the console .

* UI updates dynamically when the data is received from the server .

* custom style added in style.css .
## Helping Resources
* [Ahmed Moussa project](https://github.com/Mindirix/Weather-Journal-App)
* [FWD online community](https://nfpdiscussions.udacity.com)
* [Udacity project Rubric](https://review.udacity.com/#!/rubrics/4671/view)

### Credits
[Bishoy Osama](https://github.com/beshoy96)

[Original template](https://github.com/udacity/fend/tree/refresh-2019) is provided by [Udacity](https://github.com/udacity).
