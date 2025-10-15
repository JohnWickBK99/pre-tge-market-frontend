import axiosInstance from '@/lib/axios';
import type { ApiResponse, PaginatedResponse } from '@/types/api';

/**
 * Example Data Type
 */
export interface ExampleData {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Example Filter
 */
export interface ExampleFilter {
  search?: string;
  page?: number;
  limit?: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Example Service
 * Template for creating API services using class pattern
 */
export class ExampleService {
  /**
   * Get list of examples with pagination and filters
   */
  async getExamples(
    filters?: ExampleFilter
  ): Promise<PaginatedResponse<ExampleData>> {
    const response = await axiosInstance.get('/examples', {
      params: {
        search: filters?.search || undefined,
        page: filters?.page || 1,
        limit: filters?.limit || 10,
        sort_field: filters?.sortField,
        sort_order: filters?.sortOrder,
      },
    });
    return response.data;
  }

  /**
   * Get example by ID
   */
  async getExampleById(id: string): Promise<ApiResponse<ExampleData>> {
    const response = await axiosInstance.get(`/examples/${id}`);
    return response.data;
  }

  /**
   * Create new example
   */
  async createExample(
    data: Omit<ExampleData, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<ApiResponse<ExampleData>> {
    const response = await axiosInstance.post('/examples', data);
    return response.data;
  }

  /**
   * Update example
   */
  async updateExample(
    id: string,
    data: Partial<ExampleData>
  ): Promise<ApiResponse<ExampleData>> {
    const response = await axiosInstance.patch(`/examples/${id}`, data);
    return response.data;
  }

  /**
   * Delete example
   */
  async deleteExample(id: string): Promise<ApiResponse> {
    const response = await axiosInstance.delete(`/examples/${id}`);
    return response.data;
  }
}
