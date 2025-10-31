import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setWeather(null);

    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      setWeather("City not found");
      setLoading(false);
      return;
    }

    const { latitude, longitude } = geoData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    setWeather(weatherData.current_weather);
    setLoading(false);
  };

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️"; // Clear sky
    if ([1, 2, 3].includes(code)) return "⛅"; // Cloudy
    if ([45, 48].includes(code)) return "🌫️"; // Fog
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️"; // Drizzle
    if ([61, 63, 65, 66, 67].includes(code)) return "🌧️"; // Rain
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️"; // Snow
    if ([95].includes(code)) return "⛈️"; // Thunderstorm
    return "🌍"; // Default
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center p-6 text-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/20">

        <h1 className="text-3xl font-semibold mb-6">Weather Now</h1>

        <input
          type="text"
          placeholder="Enter city name..."
          className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>

        {loading && (
          <p className="mt-6 animate-pulse text-lg">Fetching weather...</p>
        )}

        {weather && typeof weather === "object" && (
          <div className="mt-6">
            <div className="text-7xl mb-2">{getWeatherIcon(weather.weathercode)}</div>
            <p className="text-lg font-medium">
              Temperature: {weather.temperature}°C
            </p>
            <p className="text-sm opacity-80">
              Wind Speed: {weather.windspeed} km/h
            </p>
          </div>
        )}

        {weather === "City not found" && (
          <p className="mt-6 text-red-400 font-medium">City not found. Try again!</p>
        )}
      </div>
    </div>
  );

}

export default App;
