import axiosInstance from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { Token } from './token.service';

/**
 * Search Result
 */
export interface SearchResult {
  tokens: Token[];
  totalResults: number;
}

/**
 * Search Suggestion
 */
export interface SearchSuggestion {
  id: string;
  type: 'token' | 'network' | 'user';
  symbol: string;
  name: string;
  logo?: string;
  network?: string;
  displayText: string;
}

/**
 * Search Suggestions Response
 */
export interface SearchSuggestionsResponse {
  success: boolean;
  data: SearchSuggestion[];
  message?: string;
}

/**
 * Search Service
 * Manages search functionality
 */
export class SearchService {
  /**
   * Global search
   */
  async search(
    query: string,
    filters?: Record<string, any>
  ): Promise<ApiResponse<SearchResult>> {
    const response = await axiosInstance.get('/search', {
      params: { q: query, ...filters },
    });
    return response.data;
  }

  /**
   * Get search suggestions
   */
  async getSuggestions(
    query: string,
    limit: number = 10
  ): Promise<SearchSuggestionsResponse> {
    const response = await axiosInstance.get('/search/suggestions', {
      params: {
        q: query,
        limit,
      },
    });
    return response.data;
  }

  /**
   * Get popular searches
   */
  async getPopularSearches(): Promise<ApiResponse<string[]>> {
    const response = await axiosInstance.get('/search/popular');
    return response.data;
  }

  /**
   * Get recent searches (from local storage)
   */
  getRecentSearches(): string[] {
    const recent = localStorage.getItem('recentSearches');
    return recent ? JSON.parse(recent) : [];
  }

  /**
   * Save search to recent (local storage)
   */
  saveRecentSearch(query: string): void {
    const recent = this.getRecentSearches();
    const updated = [query, ...recent.filter((q) => q !== query)].slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  }

  /**
   * Clear recent searches
   */
  clearRecentSearches(): void {
    localStorage.removeItem('recentSearches');
  }
}
