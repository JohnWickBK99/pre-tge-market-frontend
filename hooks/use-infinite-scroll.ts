import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';

/**
 * Paginated Response Type
 */
export interface PaginatedData<T> {
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
 * Infinite Scroll Options
 */
interface UseInfiniteScrollOptions<T> {
  queryKey: any[];
  queryFn: (page: number) => Promise<PaginatedData<T>>;
  initialLimit?: number;
  enabled?: boolean;
  onSuccess?: (data: PaginatedData<T>) => void;
  onError?: (error: Error) => void;
}

/**
 * Generic Infinite Scroll Hook
 * Reusable hook for infinite scroll/load more functionality
 *
 * @example
 * ```tsx
 * const {
 *   data,
 *   isLoading,
 *   isFetchingNextPage,
 *   hasNextPage,
 *   fetchNextPage,
 *   observerRef,
 * } = useInfiniteScroll({
 *   queryKey: ['tokens'],
 *   queryFn: (page) => Service.token.getTokens({ page }),
 * });
 * ```
 */
export function useInfiniteScroll<T>({
  queryKey,
  queryFn,
  initialLimit = 12,
  enabled = true,
  onSuccess,
  onError,
}: UseInfiniteScrollOptions<T>) {
  const observerRef = useRef<HTMLDivElement>(null);

  // Use React Query's useInfiniteQuery
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const result = await queryFn(pageParam);
      if (onSuccess) onSuccess(result);
      return result;
    },
    getNextPageParam: (lastPage: PaginatedData<T>) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    initialPageParam: 1,
    enabled,
  });

  // Handle errors
  useEffect(() => {
    if (isError && error && onError) {
      onError(error as Error);
    }
  }, [isError, error, onError]);

  // Intersection Observer for auto-loading
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.disconnect();
  }, [handleObserver]);

  // Flatten all pages data
  const flatData = data?.pages.flatMap((page) => page.data.data) ?? [];

  // Get total count from first page
  const totalCount = data?.pages[0]?.data.pagination.total ?? 0;

  return {
    data: flatData,
    allPages: data?.pages,
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
