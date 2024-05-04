const apiKey = '86d7289f7af8bdca84b990e1dc854b32';
const city = 'New York'; // Change this to your desired city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('weather');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        weatherContainer.innerHTML = `Current temperature in ${city}: ${temperature}°C, ${description}`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
