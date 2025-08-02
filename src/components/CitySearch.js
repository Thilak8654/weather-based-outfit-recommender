import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import  weatherApi  from '../interceptors/weatherApi'


function CitySearch() {
  const [city, setCity] = useState("");
  const { dispatch } = useContext(WeatherContext);

    const fetchWeather = async (cityName) => {
    try {
      const res = await weatherApi.get("weather", {
        params: { q: cityName },
      });
      dispatch({ type: "SET_WEATHER", payload: res.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.response?.data?.message || err.message });
    }
  };
  
//   const fetchWeather = async (cityName) => {
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
//       );
//       if (!res.ok) throw new Error("City not found");
//       const data = await res.json();
//       dispatch({ type: "SET_WEATHER", payload: data });
//     } catch (err) {
//       dispatch({ type: "SET_ERROR", payload: err.message });
//     }
//   };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city.trim());
      setCity("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 flex-shrink-0 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default CitySearch;
