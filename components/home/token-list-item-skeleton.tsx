import { Skeleton } from '@/components/ui/skeleton';

export function TokenListItemSkeleton() {
  return (
    <div className="border-border-default bg-layer-2 flex items-center gap-4 rounded-md border p-4">
      {/* Token Icon & Name */}
      <div className="flex w-[207px] items-center gap-4">
        <Skeleton className="size-12 shrink-0 rounded-full" />
        <Skeleton className="h-6 w-16" />
      </div>

      {/* Progress Section */}
      <div className="flex min-w-0 flex-1 flex-col gap-2 pr-3">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-2 w-full" />
      </div>

      {/* Price Section */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-7 w-24" />
      </div>

      {/* Collateral & Settle Duration */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-36" />
      </div>

      {/* Seller Info */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="flex min-w-0 flex-col gap-1">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-8" />
        </div>
      </div>

      {/* External Link Button */}
      <Skeleton className="size-6 shrink-0 rounded-md" />
    </div>
  );
}
