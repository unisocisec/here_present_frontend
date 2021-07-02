import axios from "axios";
// const functions = require('firebase-functions');
// const config = functions.config();
// // Porting envs from firebase config
// for (const key in config.env){
//   process.env[key.toUpperCase()] = config.env[key];
// }

const BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
const api = axios.create({baseURL: BASE_URL})
export default api