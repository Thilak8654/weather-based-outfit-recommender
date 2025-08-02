import CitySearch from "./components/CitySearch";
import './App.css';

function App() {
  return (
    <div className="mx-auto my-5 p-4 bg-white">
       <h1 className="text-2xl font-bold text-center mb-6">
        🌤️ Weather-Based Outfit Recommender
      </h1>
      <CitySearch />
    </div>
  );
}

export default App;
