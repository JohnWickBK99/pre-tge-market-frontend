import axios from 'axios';
import { toast } from 'sonner';

/**
 * Axios instance with default configuration
 */
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor
 * Add auth token to requests when Authorization header is set to true
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token only if explicitly requested
    const token = localStorage.getItem('accessToken');
    if (token && config.headers?.Authorization === true) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handle common errors and notifications
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Success response - can show success toast if needed
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      // Forbidden
      toast.error('You do not have permission to access this resource.');
    } else if (error.response?.status === 404) {
      // Not found
      toast.error('Resource not found.');
    } else if (error.response?.status === 500) {
      // Internal server error
      toast.error('Internal server error. Please try again later.');
    } else if (error.response?.data?.message) {
      // Custom error message from API
      toast.error(error.response.data.message);
    } else if (error.message === 'Network Error') {
      // Network error
      toast.error('Network error. Please check your connection.');
    } else {
      // Generic error
      toast.error('Something went wrong. Please try again.');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
