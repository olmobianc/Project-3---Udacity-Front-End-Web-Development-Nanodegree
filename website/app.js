/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '515a96d2f824b84902e9acef36d94c63';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    e.prevetDefault();

    const newZip = document.getElementById("zip").value;

    getWeatherData(baseURL, newZip, apiKey)
        //chaining promises
        .then(function(userInput) {
        //add data to POST request
        postData('/add', { temp: userInput.main.temp, date: newDate, content });
        })
}

/* Function to GET Web API Data*/
const getWeatherData = async(baseURL, zip, apiKey) => {
    const response = await fetch(baseURL+zip+apiKey);
    try {
        const userInput = await response.json(); //convert the data object into json file
        console.log(data);
    } catch (error) {
        console.log("There was an error with your GET request", error);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const request = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ temp: data.temp, date: data.date, content: data.content }),
    });
  
    try {
        const newData = await request.json();
        return newData;
    }
    catch (error) {
        console.log("There was an error with your POST request", error);
    }
}

/* Function to GET Project Data */