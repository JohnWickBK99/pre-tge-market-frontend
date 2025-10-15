'use client';

import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

/**
 * React Query Provider
 * Wraps the app with TanStack React Query
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
