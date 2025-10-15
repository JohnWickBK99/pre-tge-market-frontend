'use client';

import { DayJsProvider } from './dayjs-provider';
import { QueryProvider } from './query-provider';

/**
 * Application Providers
 * Combines all app-level providers into a single component
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DayJsProvider>
      <QueryProvider>{children}</QueryProvider>
    </DayJsProvider>
  );
}

// Export individual providers for testing or selective usage
export { DayJsProvider } from './dayjs-provider';
export { QueryProvider } from './query-provider';
