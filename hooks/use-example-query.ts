import { QUERY_KEYS } from '@/constants';
import { Service } from '@/services';
import { useQuery } from '@tanstack/react-query';

/**
 * Example React Query hook
 * Template for creating data fetching hooks with React Query
 */

/**
 * Hook to fetch examples list
 */
export const useExamplesQuery = (filters?: {
  search?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS, 'list', filters],
    queryFn: () => Service.example.getExamples(filters),
    placeholderData: (previousData) => previousData,
  });
};

/**
 * Hook to fetch example by ID
 */
export const useExampleByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS, 'detail', id],
    queryFn: () => Service.example.getExampleById(id),
    enabled: !!id,
  });
};
