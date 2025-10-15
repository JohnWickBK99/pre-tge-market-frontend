import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function TokenCardSkeleton() {
  return (
    <Card className="flex flex-col p-3">
      <CardHeader className="p-0">
        {/* Token Image Skeleton */}
        <div className="border-border-default relative h-48 w-full overflow-hidden rounded-2xl border">
          <Skeleton className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900" />
          {/* Network Badge Skeleton */}
          <Skeleton className="absolute top-2 left-2 h-5 w-16 rounded-2xl" />
          {/* Duration & Collateral Badges Skeleton */}
          <div className="absolute bottom-2 left-2 flex gap-1">
            <Skeleton className="h-5 w-12 rounded-2xl" />
            <Skeleton className="h-5 w-10 rounded-2xl" />
          </div>
        </div>
      </CardHeader>

      {/* Token Info Skeleton */}
      <CardContent className="flex flex-col gap-2 p-0 py-3">
        {/* Offer & Value Section Skeleton */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>

        {/* Description Skeleton */}
        <Skeleton className="h-10 w-full" />

        {/* Divider */}
        <div className="bg-border-default h-px w-full" />

        {/* Progress & Price Section Skeleton */}
        <div className="flex items-end justify-between gap-2">
          {/* Progress Skeleton */}
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-2 w-full rounded-full" />
          </div>

          {/* Price Skeleton */}
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
