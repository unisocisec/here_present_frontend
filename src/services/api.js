import axios from "axios";
console.log("process", process.env)
console.log("GCLOUD_PROJECT", process.env.GCLOUD_PROJECT)
console.log("FIREBASE_CONFIG", process.env.FIREBASE_CONFIG)
const BASE_URL = ""
if (process.env.GCLOUD_PROJECT === 'here-present-5e704') {
  BASE_URL = "https://herepresent.herokuapp.com"
} else {
  BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
}
const api = axios.create({baseURL: BASE_URL})
export default api