import type { ApiResponse } from '@/types/api';
import axios from 'axios';

/**
 * Upload Response
 */
export interface UploadResponse {
  success: boolean;
  data?: {
    name: string;
    size: number;
    url: string;
    thumbnail?: string;
  };
  error?: string;
}

/**
 * Multiple Upload Response
 */
export interface MultipleUploadResponse {
  success: boolean;
  data?: {
    urls: string[];
  };
  error?: string;
}

/**
 * Upload Service
 * Manages file uploads (Zipline integration)
 */
export class UploadService {
  /**
   * Upload single image
   */
  async uploadImage(file: File): Promise<UploadResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/api/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file upload
      });

      return response.data;
    } catch (error: any) {
      console.error('Upload error:', error);

      if (error.response?.data?.error) {
        return {
          success: false,
          error: error.response.data.error,
        };
      }

      return {
        success: false,
        error: 'Upload failed. Please try again.',
      };
    }
  }

  /**
   * Upload multiple images
   */
  async uploadMultipleImages(files: File[]): Promise<MultipleUploadResponse> {
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await axios.post('/api/upload/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file upload
      });

      return response.data;
    } catch (error: any) {
      console.error('Upload error:', error);

      if (error.response?.data?.error) {
        return {
          success: false,
          error: error.response.data.error,
        };
      }

      return {
        success: false,
        error: 'Upload failed. Please try again.',
      };
    }
  }

  /**
   * Upload avatar
   */
  async uploadAvatar(file: File): Promise<UploadResponse> {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await axios.post('/api/upload/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file upload
      });

      return response.data;
    } catch (error: any) {
      console.error('Upload error:', error);

      if (error.response?.data?.error) {
        return {
          success: false,
          error: error.response.data.error,
        };
      }

      return {
        success: false,
        error: 'Upload failed. Please try again.',
      };
    }
  }

  /**
   * Delete uploaded file
   */
  async deleteFile(url: string): Promise<ApiResponse> {
    const response = await axios.delete('/api/upload', {
      data: { url },
    });
    return response.data;
  }

  /**
   * Validate file before upload
   */
  validateFile(file: File): { isValid: boolean; error?: string } {
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
    ];

    if (!allowedTypes.includes(file.type)) {
      return {
        isValid: false,
        error:
          'Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.',
      };
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return {
        isValid: false,
        error: 'File too large. Maximum size is 5MB.',
      };
    }

    return { isValid: true };
  }
}
