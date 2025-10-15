/**
 * API Response Types
 */

/**
 * Base API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Paginated API Response
 */
export interface PaginatedResponse<T = any> {
  success: boolean;
  data: {
    data: T[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

/**
 * Single Item Response
 */
export interface SingleResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Error Response
 */
export interface ErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Pagination Parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Query Parameters with Pagination and Sorting
 */
export interface QueryParams extends PaginationParams {
  search?: string;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
  [key: string]: any;
}
