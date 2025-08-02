import axios from "axios";

const API_KEY = "135b1994551a3d091e2f64e6cd4b706c"; 

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

weatherApi.interceptors.request.use(config => {
  if (!config.params) config.params = {};
  config.params.appid = API_KEY;
  config.params.units = "metric";
  return config;
}, error => Promise.reject(error));

export default weatherApi;
