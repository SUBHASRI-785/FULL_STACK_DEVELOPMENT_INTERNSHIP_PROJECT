// ---------------- WEATHER ----------------
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherOutput = document.getElementById("weatherResult");
    weatherOutput.textContent = "Loading weather...";

    if (!city) {
        weatherOutput.textContent = "Please enter a city name.";
        return;
    }

    const apiKey = "YOUR_WEATHER_API_KEY"; // Replace with your key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${apiKey}`;

    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error("City not found");
        let data = await res.json();

        weatherOutput.innerHTML = `
            <strong>${data.name}, ${data.sys.country}</strong><br>
            Temp: ${data.main.temp} °C<br>
            Weather: ${data.weather[0].description}
        `;
    } catch (err) {
        weatherOutput.textContent = "Error: " + err.message;
    }
}

// ---------------- ADVICE ----------------
async function getAdvice() {
    const adviceOutput = document.getElementById("adviceResult");
    adviceOutput.textContent = "Fetching advice...";

    try {
        let res = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
        let data = await res.json();

        adviceOutput.textContent = `"${data.slip.advice}"`;
    } catch (err) {
        adviceOutput.textContent = "Could not get advice right now.";
    }
}
