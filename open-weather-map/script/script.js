const API_KEY = 'd3491d9619d0482282932741240912';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName= document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const icon = document.getElementById('icon');
const errorMessage = document.getElementById('errorMessage');


searchBtn.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        displayError('Please enter a city name');
        return;
    }

    const apiURL = `https://api.weatherapi.com/v1/current.json?key=d3491d9619d0482282932741240912&q=London
`

    fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error ('City not found.')
        }
        return response.json();
    })
    .then(data => {
        updateWeatherUI(data);
    })
    .catch(error => {
        displayError(error.message)
    }) ;
}

function updateWeatherUI(data) {
    const weather = data.weather;
    cityName.textContent = data.location.name;
    temperature.textContent = `Temperature: ${data.main.temp} C`;
    description.textContent = `Condition: ${weather.description}`;
    icon.textContent = getWeatherEmoji(weather.main);
    errorMessage.classList.add('hidden');
}

function getWeatherEmoji(condition) {
    switch (condition.toLowerCase()) {
        case 'clear':
            return '☀️';
        case 'cloud': 
            return '☁️';
        case 'rain': 
            return '🌧️';

        case 'snow': 
            return '❄️';

        case 'thunderstorm':
            return '⛈️';
        default:
            return '🌤️';
    }
}