import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://steel-dart.skni.edu.pl/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
