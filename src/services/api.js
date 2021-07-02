import axios from "axios";
var BASE_URL = ""
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://herepresent.herokuapp.com"
} else {
  BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
}
const api = axios.create({baseURL: BASE_URL})
export default api