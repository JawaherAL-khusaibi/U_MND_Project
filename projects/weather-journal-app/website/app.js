/* Global Variables */
const button = document.getElementById("generate");


// Personal API Key for OpenWeatherMap API
const apiKey = '21d36029fa7be50289d449fb407b1367&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
/* Function called by event listener */

button.addEventListener("click", async () => {

  const feelings = document.getElementById('feelings').value;
  const zipCode = document.getElementById('zip').value;
  const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial&zip=${zipCode}`;

  try {

    /* GET Web API Data*/
    const response = await fetch(weatherAPIUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const weatherData = await response.json();
      //console.log(weatherData);

      document.getElementById('temp').innerHTML = Math.round(weatherData.main.temp) + ' degrees';
      document.getElementById('content').innerHTML = feelings;
      document.getElementById('date').innerHTML = newDate;

      return weatherData;


    } catch (error) {

      console.error('Error fetching weather data:', error);
      throw error;
      
    }



});

/*
const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    console.log(allData);
    // Update the DOM elements with the retrieved data
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML = allData.date;
  } catch (error) {
    console.log('error', error);
    // Handle the error appropriately
  }
}
*/