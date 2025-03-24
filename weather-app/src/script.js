// DOM元素
const cityNameInput = document.getElementById('city-name-input');
const searchButton = document.getElementById('search-button');

const emptyState = document.querySelector('div.empty-state');
const weatherInfo = document.querySelector('div.weather-info');

const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const temperature = document.getElementById('temperature');
const weatherText = document.getElementById('weather-text');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');

// API
let apiKey = ''; // 在此处添加实际的API Key
let apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

function toggleWeatherInfo() {
  emptyState.classList.toggle('hidden');
  weatherInfo.classList.toggle('hidden');
}

function getWeatherData(cityName) {
  const params = new URLSearchParams({
    unitGroup: 'metric',
    lang: 'zh',
    key: apiKey,
  });

  let fullURL = `${apiURL}${cityName}?${params.toString()}`;
  fetch(fullURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
