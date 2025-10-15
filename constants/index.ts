/**
 * Application constants
 */

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Pre-TGE Market';
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  // Add your API endpoints here
  // Example:
  // USERS: '/users',
  // POSTS: '/posts',
};

/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  // Add your routes here
};

/**
 * Query keys for React Query
 */
export const QUERY_KEYS = {
  // Add your query keys here
  // Example:
  USERS: 'users',
  // POSTS: 'posts',
};
