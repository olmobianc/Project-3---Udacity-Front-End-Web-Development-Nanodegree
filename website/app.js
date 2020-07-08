/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
CONST baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
CONST apiKey = '&APPID=515a96d2f824b84902e9acef36d94c63';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction() {
    const newZip = document.getElementById("zip").value;
    const content = document.getElementById('feelings').value;

    if (newZip.length === 0 || content.length === 0) {
        alert("Data is not inserted correctly.. Please try again");
        return;
    }

    getWeatherData(baseURL, newZip, apiKey)
        //chaining promises
        .then(function(data) {
        //add data to POST request
            postData('/add', { 
                temp: data.main.temp,
                date: newDate, 
                userInput: content 
            });
        })
}

/* Function to GET Web API Data*/
const getWeatherData = async(baseURL, zip, apiKey) => {
    const response = await fetch(baseURL + zip + apiKey);
    try {
        const data = await response.json(); //convert the data object into json file
        console.log(data);
    } catch (error) {
        console.log("There was an error with your GET request", error);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        // body data type must match "Content-Type" header
        body: JSON.stringify({
            temp: data.temp,
            date: data.date,
            userInput: data.content }),  
    });
  
    try {
        const newData = await response.json();
        return newData;
    }
    catch (error) {
        console.log("There was an error with your POST request", error);
    }
}

/* Function to GET Project Data */