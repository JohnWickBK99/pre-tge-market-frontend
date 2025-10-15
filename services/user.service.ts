import axiosInstance from '@/lib/axios';
import type { ApiResponse } from '@/types/api';

/**
 * User Data Type
 */
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  role: 'user' | 'admin';
  walletAddress?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * User Profile Update Data
 */
export interface UpdateUserProfile {
  username?: string;
  avatar?: string;
  walletAddress?: string;
}

/**
 * User Response
 */
interface UserResponse {
  success: boolean;
  data: User;
  message?: string;
}

/**
 * Reviews Response
 */
interface ReviewsResponse {
  success: boolean;
  data: {
    data: any[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

/**
 * Orders Response
 */
interface OrdersResponse {
  success: boolean;
  data: {
    data: any[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

/**
 * User Service
 * Manages user profile and settings
 */
export class UserService {
  /**
   * Get user by ID (seller info)
   */
  async getUserById(id: string): Promise<UserResponse> {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  }

  /**
   * Get current user profile
   */
  async getProfile(): Promise<UserResponse> {
    const response = await axiosInstance.get('/profile', {
      headers: { Authorization: true },
    });
    return response.data;
  }

  /**
   * Update user profile
   */
  async updateProfile(data: UpdateUserProfile): Promise<UserResponse> {
    const response = await axiosInstance.patch('/profile', data, {
      headers: { Authorization: true },
    });
    return response.data;
  }

  /**
   * Get reviews by seller ID
   */
  async getReviewsBySellerId(
    id: string,
    params?: { page?: number; limit?: number }
  ): Promise<ReviewsResponse> {
    const response = await axiosInstance.get(`/users/${id}/reviews`, {
      params,
    });
    return response.data;
  }

  /**
   * Get filled orders by user ID
   */
  async getFilledOrders(
    id: string,
    params?: { page?: number; limit?: number }
  ): Promise<OrdersResponse> {
    const response = await axiosInstance.get(`/users/${id}/orders`, {
      params,
    });
    return response.data;
  }

  /**
   * Connect wallet
   */
  async connectWallet(walletAddress: string): Promise<ApiResponse> {
    const response = await axiosInstance.post(
      '/users/wallet/connect',
      {
        walletAddress,
      },
      {
        headers: { Authorization: true },
      }
    );
    return response.data;
  }

  /**
   * Disconnect wallet
   */
  async disconnectWallet(): Promise<ApiResponse> {
    const response = await axiosInstance.post(
      '/users/wallet/disconnect',
      {},
      {
        headers: { Authorization: true },
      }
    );
    return response.data;
  }
}
