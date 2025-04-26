import axios from "axios";
import { baseUrl } from "@Constants/shared";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const apiKey = import.meta.env.VITE_API_KEY_ACCESS;
        if (apiKey) {
            config.params = {
                ...config.params,
                client_id: apiKey
            };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;