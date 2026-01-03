function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "21383ddec5433f843574a11abcd3ef84";
    const resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod === 404) {
                resultDiv.innerHTML = "City not found ❌";
            } else {
                resultDiv.innerHTML = `
                    <b>City:</b> ${data.name} <br>
                    <b>Temperature:</b> ${data.main.temp} °C <br>
                    <b>Weather:</b> ${data.weather[0].description} <br>
                    <b>Humidity:</b> ${data.main.humidity}% <br>
                    <b>Wind Speed:</b> ${data.wind.speed} m/s
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "Error fetching data";
        });
}

