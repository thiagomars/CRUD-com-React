import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.box3.work/api/Contato/f35f1284-1fe8-471f-9369-faacfa560044'
});

api.interceptors.request.use(async config => {
    // Declaramos um token manualmente para teste.
    const token = "f35f1284-1fe8-471f-9369-faacfa560044";
  
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
});

export default api;