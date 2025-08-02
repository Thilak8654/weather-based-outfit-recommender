import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const OutfitSuggestion = () => {
    const { state } = useContext(WeatherContext);
    const { weather } = state;

    if (!weather) return null;

    const temp = weather.main.temp;
    const condition = weather.weather[0]?.main.toLowerCase() || "";
    const windSpeed = (weather.wind.speed || 0) * 3.6;

    const suggestions = [];
    if (temp < 15) {
        suggestions.push("🧥 It's cold. Wear a jacket");
    } else if (temp > 25) {
        suggestions.push("👕 It's Hot. Wear T-shirt and Shorts ");
    }

    if (windSpeed > 20) {
        suggestions.push(" 🌬️ Its windy - wear a windbreaker");
    }

    if (condition.includes("rain") || condition.includes("drizzle")) {
        suggestions.push("☔ Take an Umberalla");
    }
    if (condition.includes("clear") || condition.includes("sun")) {
        suggestions.push("🕶️ Wear sunglasses and sunscreen");
    }
    if (condition.includes("cloud")) {
        suggestions.push("🧶 Consider a light sweater, it's cloudy.");
    }
    if (
        condition.includes("fog") ||
        condition.includes("mist") ||
        condition.includes("haze")
    ) {
        suggestions.push("🌁 It's foggy – light layers and visibility caution");
    }
    return (
        <div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg p-4 mb-4 shadow">
            <h3 className="font-semibold text-gray-800 dark:text-white"> Outfit Suggestions:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-100 ">
                {suggestions.length > 0 ? suggestions.map((s, idx) => (
                    <li key={idx}>{s}</li>
                )) : <li>Dress comfortably.</li>}
            </ul>
        </div>
    )
}

export default OutfitSuggestion