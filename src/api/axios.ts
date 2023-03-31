import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_PATH,
    timeout: 1000,
    headers: { Accept: 'application/json' },
});

export default axiosInstance