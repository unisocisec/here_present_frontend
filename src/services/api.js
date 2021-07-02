import axios from "axios";
if (process.env.GCLOUD_PROJECT === 'here-present-5e704') {
  const BASE_URL = "https://herepresent.herokuapp.com"
} else {
  const BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
}
const api = axios.create({baseURL: BASE_URL})
export default api