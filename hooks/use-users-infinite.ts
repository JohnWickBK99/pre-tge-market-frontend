import { Service } from '@/services';
import type { User } from '@/services/user.service';
import { useInfiniteScroll } from './use-infinite-scroll';

/**
 * Infinite Scroll Hook for Users
 * Example of reusing the infinite scroll hook for different entities
 *
 * @example
 * ```tsx
 * const {
 *   users,
 *   isLoading,
 *   isFetchingNextPage,
 *   hasNextPage,
 *   observerRef,
 * } = useUsersInfinite({
 *   search: 'john',
 *   role: 'admin',
 * });
 * ```
 */
export function useUsersInfinite(filters?: {
  search?: string;
  role?: string;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}) {
  const {
    data,
    totalCount,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerRef,
  } = useInfiniteScroll<User>({
    queryKey: ['users', 'infinite', filters],
    queryFn: async (page) => {
      // Mock response structure - replace with actual API call
      const response = await Service.user.getProfile();
      return {
        success: true,
        data: {
          data: [response.data], // In real scenario, this would be an array from API
          pagination: {
            total: 1,
            page,
            limit: 12,
            totalPages: 1,
          },
        },
      };
    },
    onError: (err) => {
      console.error('Failed to fetch users:', err);
    },
  });

  return {
    users: data,
    totalCount,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerRef,
  };
}
