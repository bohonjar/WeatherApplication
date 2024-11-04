document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const apiKey = 'bac30546ab6a16d2d05b717ad2771763'; // Replace with your OpenWeatherMap API key

    if (!city || !state) {
        alert('Please enter both city and state.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °F</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            alert(error.message);
        });
});
