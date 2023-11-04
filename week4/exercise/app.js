// Step 1:
const API_KEY = '3781176cc9bdb36ad05bcf7ef18b5779';

// Step 2:
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

// Step 3:
searchButton.addEventListener('click', () => {
  // Step 4:
  const city = cityInput.value;
  
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  // Step 5:
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => {
      // Step 6:
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      return response.json();
    })
    .then((data) => {
      // Step 7:
      const weatherDescription = data.weather[0].description;
      const temperatureKelvin = data.main.temp;
      const windSpeed = data.wind.speed;

      // Get the city name
      const cityName = data.name;

      // Convert temperature from Kelvin to Celsius
      const temperatureCelsius = temperatureKelvin - 273.15;


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




