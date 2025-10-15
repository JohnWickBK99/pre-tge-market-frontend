import { Skeleton } from '@/components/ui/skeleton';
import { TokenCardSkeleton } from './token-card-skeleton';

export function PageLoading() {
  return (
    <div className="flex h-full flex-1 flex-col">
      {/* Hero Banner Skeleton */}
      <div className="border-border-default border-b py-4">
        <div className="flex flex-col gap-4 px-6 md:flex-row">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="h-[136px] flex-1 rounded-md bg-gradient-to-br from-gray-800 to-gray-900"
            />
          ))}
        </div>
        {/* Pagination dots skeleton */}
        <div className="mt-4 flex items-center justify-center gap-1">
          <Skeleton className="h-2 w-4 rounded-full" />
          <Skeleton className="size-2 rounded-full" />
        </div>
      </div>

      {/* Header Section Skeleton */}
      <div className="border-border-default border-b py-4">
        <div className="flex flex-col gap-8 px-6">
          {/* Title skeleton */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Skeleton className="h-10 w-96 bg-gradient-to-r from-gray-800 to-gray-700" />
            <Skeleton className="h-6 w-[500px]" />
          </div>

          {/* Filters skeleton */}
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
            <div className="flex w-full flex-col items-start gap-4 lg:w-auto lg:flex-row">
              <Skeleton className="h-9 w-full rounded-md lg:w-[358px]" />
              <Skeleton className="h-9 w-full rounded-md lg:w-[177px]" />
              <Skeleton className="h-9 w-full rounded-md lg:w-[177px]" />
            </div>
            <div className="flex items-start gap-2">
              <Skeleton className="size-9 rounded-md" />
              <Skeleton className="size-9 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Token Grid Skeleton */}
      <div className="flex flex-1 flex-col gap-6 py-4">
        <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <TokenCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
