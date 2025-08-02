import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function ErrorDisplay() {
    const { state } = useContext(WeatherContext);
    const { error } = state;
    if (!error) return null;
    return (
        <div className="bg-red-100 text-red-700 rounded p-3 mb-4 font-bold">
            ❌ {error}
        </div>
    );
}

export default ErrorDisplay;
