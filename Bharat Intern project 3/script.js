const apiKey = '4fe844bb0c53946f08cfc3e7773e6299';
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');

getWeatherBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert('Please enter a city name');
    return;
  }

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather, wind, visibility } = data;
      const temp = main.temp;
      const description = weather[0].description;
      const windSpeed = wind.speed;
      const visibilityKm = visibility / 1000;

      weatherInfo.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temp.toFixed(1)} °C</p>
        <p>Description: ${description}</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Visibility: ${visibilityKm.toFixed(1)} km</p> 
      `;
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while fetching weather data');
    });
});
