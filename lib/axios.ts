import axios from "axios";

// Create axios instance — no baseURL so all requests use relative paths
// and go through Next.js rewrites (configured in next.config.js).
// This avoids mixed content (HTTP/HTTPS) and CORS issues in production.
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (optional - for adding auth tokens, etc.)
api.interceptors.request.use(
  (config) => {
    // You can add authorization headers here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor (optional - for error handling)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default api;
