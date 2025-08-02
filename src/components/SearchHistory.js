import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import weatherApi from '../interceptors/weatherApi';


const SearchHistory = () => {
    const { state, dispatch } = useContext(WeatherContext);
    const  {history} = state;
    const redoSearch = async (cityName) => {
        try{
            const res = await weatherApi.get("weather", {
                params: { q: cityName },
            });
            dispatch({type: "SET_WEATHER",  payload: res.data });
        } catch(err) {
            dispatch({
                type: "SET_ERROR",
                payload: err.response?.data?.message || err.message,
            })
        }
    }
    if (!history || !Array.isArray(history) || history.length === 0) return null;

    return (
        <div className="bg-gray-100 rounded-lg p-3 mt-3 shadow">
      <h4 className="font-semibold">🕘 Recent Searches:</h4>
      <ul className="flex flex-wrap gap-2 mt-2">
        {history.map((city, i) => (
          <li
            key={i}
            className="px-3 py-1 bg-blue-200 rounded cursor-pointer hover:bg-blue-400 transition"
            onClick={() => redoSearch(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default SearchHistory