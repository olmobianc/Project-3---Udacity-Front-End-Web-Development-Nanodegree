## Project Objective
This project required me to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Building
To get the project up and running I followed these steps:

1. Setting up project environment, making sure I had Node and packages installed, and included in my server.js file.
2. Added POST and GET routes to ensure correct retrieval of  data from the server.
3. Acquired API credentials from OpenWeatherMap website.
4. Created async functions to fetch weather data and store it on my local server.
5. Set up a function that updated UI dynamically.

## Instructions
To run this app fork, clone, or download this repository to your local machine. You will need to install the npm packages used in this app. Open the terminal and change to the directory location of this app. Run the following commands:

* npm install express
* npm install cors
* npm install body-parser

When those are installed run `node server.js` in the terminal. Once the app is running visit localhost:8000 in the browser to view the app. The user can input a zip code and current feelings into the provided fields. Submitting the form will send a request to the OpenWeatherMap API and return weather information for that location.

## Dependencies
* HTML
* CSS
* Javascript
* NodeJS
* ExpressJS
* Weather API used [OpenWeatherMap](https://openweathermap.org/).

## Languages I used: 
1. HTML
2. CSS
3. Javascript
