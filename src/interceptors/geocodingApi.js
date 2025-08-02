import axios from "axios";

const API_KEY = "135b1994551a3d091e2f64e6cd4b706c"; // 🔑 Replace this with your actual OpenWeatherMap key

const geoApi = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0/direct",
});

// Interceptor to automatically attach key and default limit
geoApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.appid = API_KEY;
  config.params.limit = 5; // Max number of suggestions
  return config;
}, (error) => Promise.reject(error));

export default geoApi;
