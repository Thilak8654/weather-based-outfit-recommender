import './App.css';
import CitySearch from "./components/CitySearch";
import SearchHistory from "./components/SearchHistory";

function App() {
  return (
    <div className="max-w-md mx-auto my-5 p-4 bg-white rounded-x1 shadow-lg" >
       <h1 className="text-2xl font-bold text-center mb-6">
        🌤️ Weather-Based Outfit Recommender
      </h1>
      <CitySearch />
      <SearchHistory />
    </div>
  );
}

export default App;
