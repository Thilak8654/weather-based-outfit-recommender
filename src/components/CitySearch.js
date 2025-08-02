import React, { useState, useContext, useCallback } from "react";
import { WeatherContext } from "../context/WeatherContext";
import weatherApi from '../interceptors/weatherApi';
import geoApi from "../interceptors/geocodingApi";
import useDebounce from "../custom-hooks/useDebounce";


function CitySearch() {
    const [city, setCity] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const { dispatch } = useContext(WeatherContext);

    const fetchSuggestions = useCallback(async () => {
        if (!city.trim()) {
            setSuggestions([]);
            return;
        }

        try {
            const res = await geoApi.get("", { params: { q: city } });
            setSuggestions(res.data || []);
        } catch (err) {
            console.error("Auto-suggest error:", err.message);
        }
    }, [city]);

    useDebounce(fetchSuggestions, [city], 400);

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

    const handleChange = (e) => {
        // const input = e.target.value;
        setCity(e.target.value);
        // fetchSuggestions(input);
    };




    return (
        <div className="mb-4 relative">
            <input
                className="w-full px-3 py-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
                placeholder="Enter city"
                value={city}
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white shadow-lg dark:bg-gray-700">
                    {suggestions.map((place, i) => (
                        <li
                            key={i}
                            className="px-4 py-2 rounded bg-blue-500 text-white dark:text-white hover:bg-blue-600 dark:hover:bg-blue-700"
                            onClick={() => {
                                fetchWeather(place.name);
                                setCity("");
                            }}
                        >
                            {place.name}, {place.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CitySearch;
