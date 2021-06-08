import axios from 'axios';

const serverUrls: { [property: string]: any; } = {
  // 'localhost:3000': 'localhost:3000',
  'localhost:3000': 'https://herepresent.herokuapp.com/api/v1',
};

const getBaseUrl = () => {
  const { host } = window.location;

  return serverUrls[host || 'localhost:3000' ];
};

const api = axios.create({
  baseURL: getBaseUrl(),
});

export default api;
