'use client';

import { useTokensInfinite } from '@/hooks/use-tokens-infinite';
import type { TokenFilter } from '@/services/token.service';
import { TokenCard } from './token-card';
import { TokenCardSkeleton } from './token-card-skeleton';
import { TokenListItem } from './token-list-item';
import { TokenListItemSkeleton } from './token-list-item-skeleton';

type ViewMode = 'grid' | 'list';

interface TokenGridProps {
  filters?: Omit<TokenFilter, 'page' | 'limit'>;
  viewMode?: ViewMode;
}

export function TokenGrid({ filters, viewMode = 'grid' }: TokenGridProps) {
  const {
    tokens,
    totalCount,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    observerRef,
  } = useTokensInfinite(filters);

  const renderSkeletons = (count: number) => {
    if (viewMode === 'list') {
      return Array.from({ length: count }).map((_, index) => (
        <TokenListItemSkeleton key={`skeleton-${index}`} />
      ));
    }
    return Array.from({ length: count }).map((_, index) => (
      <TokenCardSkeleton key={`skeleton-${index}`} />
    ));
  };

  return (
    <div className="flex h-full flex-col gap-6 py-4">
      {/* Token Grid or List */}
      <div
        className={
          viewMode === 'list'
            ? 'flex flex-col gap-2 px-6'
            : 'grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3'
        }
      >
        {isLoading ? (
          // Show skeletons while loading initial data
          renderSkeletons(9)
        ) : tokens.length > 0 ? (
          // Show actual tokens
          viewMode === 'list' ? (
            tokens.map((token) => (
              <TokenListItem
                key={token.id}
                name={token.name}
                symbol={token.symbol}
                image={token.image}
                bgColor={token.bgColor}
                progressPercent={token.progressPercent}
                remainingAmount={token.remainingAmount}
                price={token.price}
                percentCollateral={token.percentCollateral}
                settleDuration={token.settleDuration}
                sellerAvatar={
                  token.sellerAvatar || '/images/avatar-placeholder.png'
                }
                sellerAddress={token.sellerAddress || '0x0000...0000'}
                sellerRating={token.sellerRating || 0}
              />
            ))
          ) : (
            tokens.map((token) => <TokenCard key={token.id} {...token} />)
          )
        ) : (
          // Empty state
          <div
            className={`flex min-h-[400px] items-center justify-center ${viewMode === 'grid' ? 'col-span-full' : ''}`}
          >
            <div className="text-center">
              <p className="text-text-secondary text-lg">No tokens found</p>
              <p className="text-text-tertiary mt-2 text-sm">
                Try adjusting your filters
              </p>
            </div>
          </div>
        )}

        {/* Loading more skeletons */}
        {isFetchingNextPage && renderSkeletons(3)}
      </div>

      {/* Intersection Observer Target */}
      {hasNextPage && (
        <div
          ref={observerRef}
          className="flex items-center justify-center py-8"
        >
          <div className="text-text-secondary text-sm">
            {isFetchingNextPage ? 'Loading more...' : 'Scroll for more'}
          </div>
        </div>
      )}

      {/* Total count info */}
      {!isLoading && tokens.length > 0 && (
        <div className="text-text-tertiary px-6 text-center text-sm">
          Showing {tokens.length} of {totalCount} tokens
        </div>
      )}
    </div>
  );
}
