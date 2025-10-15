import axiosInstance from '@/lib/axios';
import type { ApiResponse, PaginatedResponse } from '@/types/api';

/**
 * Token Data Type
 */
export interface Token {
  id: string;
  name: string;
  symbol: string;
  network: string;
  image: string;
  bgColor: string;
  totalOffer: string;
  totalValue: string;
  description?: string;
  settleDuration: string;
  percentCollateral: string;
  progressPercent: number;
  remainingAmount: string;
  price: string;
  tokenSymbol: string;
  sellerAvatar?: string;
  sellerAddress?: string;
  sellerRating?: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Token Filter
 */
export interface TokenFilter {
  search?: string;
  network_id?: string;
  statuses?: string[];
  page?: number;
  limit?: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Token Response
 */
interface TokensResponse {
  success: boolean;
  data: {
    data: Token[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

/**
 * Single Token Response
 */
interface SingleTokenResponse {
  success: boolean;
  data: Token;
  message?: string;
}

/**
 * Token Service
 * Manages tokens in Pre-TGE Market
 */
export class TokenService {
  /**
   * Get list of tokens with pagination and filters
   */
  async getTokens(filters?: TokenFilter): Promise<TokensResponse> {
    const response = await axiosInstance.get('/tokens', {
      params: {
        search: filters?.search || undefined,
        network_id: filters?.network_id || undefined,
        statuses: filters?.statuses?.join(',') || undefined,
        page: filters?.page || 1,
        limit: filters?.limit || 12,
        sort_field: filters?.sortField,
        sort_order: filters?.sortOrder,
      },
    });
    return response.data;
  }

  /**
   * Get token by symbol
   */
  async getTokenBySymbol(symbol: string): Promise<SingleTokenResponse> {
    const response = await axiosInstance.get(`/tokens/${symbol}`);
    return response.data;
  }

  /**
   * Search tokens
   */
  async searchTokens(query: string): Promise<ApiResponse<Token[]>> {
    const response = await axiosInstance.get('/tokens/search', {
      params: { q: query },
    });
    return response.data;
  }

  /**
   * Get trending tokens
   */
  async getTrendingTokens(limit?: number): Promise<ApiResponse<Token[]>> {
    const response = await axiosInstance.get('/tokens/trending', {
      params: { limit: limit || 10 },
    });
    return response.data;
  }

  /**
   * Filter tokens by network
   */
  async getTokensByNetwork(
    network: string,
    filters?: TokenFilter
  ): Promise<PaginatedResponse<Token>> {
    const response = await axiosInstance.get(`/tokens/network/${network}`, {
      params: filters,
    });
    return response.data;
  }
}
