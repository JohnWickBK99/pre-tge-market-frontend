import axiosInstance from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { User } from './user.service';

/**
 * Login Credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Register Data
 */
export interface RegisterData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

/**
 * Auth Response
 */
export interface AuthResponse {
  success: boolean;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

/**
 * Refresh Token Response
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

/**
 * Auth Service
 * Manages authentication and authorization
 */
export class AuthService {
  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await axiosInstance.post('/auth/login', credentials);

    // Store tokens
    const { accessToken, refreshToken } = response.data.data;
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }

    return response.data;
  }

  /**
   * Register new user
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await axiosInstance.post('/auth/register', data);

    // Store tokens
    const { accessToken, refreshToken } = response.data.data;
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }

    return response.data;
  }

  /**
   * Logout user
   */
  async logout(): Promise<ApiResponse> {
    const response = await axiosInstance.post(
      '/auth/logout',
      {},
      {
        headers: { Authorization: true },
      }
    );

    // Clear tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    return response.data;
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    const response = await axiosInstance.post('/auth/refresh', {
      refreshToken,
    });

    // Update tokens
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
    if (newRefreshToken) {
      localStorage.setItem('refreshToken', newRefreshToken);
    }

    return response.data;
  }

  /**
   * Verify email
   */
  async verifyEmail(token: string): Promise<ApiResponse> {
    const response = await axiosInstance.post('/auth/verify', { token });
    return response.data;
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<ApiResponse> {
    const response = await axiosInstance.post('/auth/forgot-password', {
      email,
    });
    return response.data;
  }

  /**
   * Reset password
   */
  async resetPassword(
    token: string,
    newPassword: string
  ): Promise<ApiResponse> {
    const response = await axiosInstance.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return response.data;
  }
}

export default AuthService;
