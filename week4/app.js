// Step 1: Get your API key from OpenWeatherMap
const API_KEY = '3781176cc9bdb36ad05bcf7ef18b5779';

// Step 2: Create variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

// Step 3: Add an event listener to the button to detect when it is clicked.
searchButton.addEventListener('click', () => {
  // Step 4: Get the value of the input field, which will be the city name
  const city = cityInput.value;
  
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  // Step 5: Make an HTTP request to the OpenWeatherMap API to fetch the weather data
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => {
      // Step 6: Error handling
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      return response.json();
    })
    .then((data) => {
      // Step 7: Update the weather info div with the weather details
      const weatherDescription = data.weather[0].description;
      const temperatureKelvin = data.main.temp;
      const windSpeed = data.wind.speed;

      // Convert temperature from Kelvin to Celsius
      const temperatureCelsius = temperatureKelvin - 273.15;

      // Get the city name
      const cityName = data.name;

      weatherInfo.innerHTML = `
         <p>The weather in ${cityName} is ${weatherDescription}</p>
         <p>The temperature is ${temperatureCelsius.toFixed(2)}°C with a wind Speed of ${windSpeed}m/s</p>
      `;
    })
    .catch((error) => {
      weatherInfo.textContent = `Error: ${error.message}`;
    });
});

fetchWeatherData('Dubai'); 
fetchWeatherData('Abu Dhabi');
fetchWeatherData('Ajman'); 

