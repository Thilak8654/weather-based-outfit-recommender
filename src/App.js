import React from "react";
import './App.css';
import CitySearch from "./components/CitySearch";
import SearchHistory from "./components/SearchHistory";
import ThemeToggle from "./components/ThemeToggle";
import { WeatherContext } from './context/WeatherContext';
import OutfitSuggestion from "./components/OutfitSuggestion";

function App() {
  const { state } = React.useContext(WeatherContext);
  return (
    <div className="min-h-screen transition-all px-4 py-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            <ThemeToggle />
      <div className="max-w-2xl mx-auto p-5 bg-white dark:bg-gray-800 rounded-x1l shadow" >
  
        <h1 className="text-2xl font-bold text-center mb-4">
          🌤️ Weather-Based Outfit Recommender
        </h1>
        <CitySearch />

        {state.offline && (
          <p className="text-red-600 text-sm mb-3">⚠️ You are offline</p>
        )}
         <OutfitSuggestion />
        <SearchHistory />
      </div>
    </div >
  );
}

export default App;
