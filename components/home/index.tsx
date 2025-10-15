'use client';

import type { TokenFilter } from '@/services/token.service';
import { useEffect, useState } from 'react';
import { FilterSidebar, type FilterState } from './filter-sidebar';
import { HeroBanner } from './hero-banner';
import { PageHeader } from './page-header';
import { PageLoading } from './page-loading';
import { SearchFilters } from './search-filters';
import { TokenGrid } from './token-grid';

type ViewMode = 'grid' | 'list';
type SortBy = 'newest' | 'oldest' | 'price' | 'volume';
type SortOrder = 'ascending' | 'descending';

export function HomePage() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('newest');
  const [sortOrder, setSortOrder] = useState<SortOrder>('descending');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sidebarFilters, setSidebarFilters] = useState<FilterState>({
    settleDuration: ['1 Hour'],
    networks: [],
    tokens: [],
    percentCollateral: [],
  });

  // Combine all filters for API
  const filters: Omit<TokenFilter, 'page' | 'limit'> = {
    search,
    sortField:
      sortBy === 'newest' || sortBy === 'oldest' ? 'createdAt' : sortBy,
    sortOrder:
      sortBy === 'newest'
        ? 'desc'
        : sortBy === 'oldest'
          ? 'asc'
          : sortOrder === 'descending'
            ? 'desc'
            : 'asc',
    // Map sidebar filters to API filters
    network_id: sidebarFilters.networks.join(','),
    // Add other filter mappings as needed
  };

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoading />;
  }

  return (
    <div className="border-border-default flex h-full flex-1 flex-col border-x">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Header Section */}
      <div className="border-border-default border-b py-4">
        <div className="flex flex-col gap-8 px-6">
          <PageHeader />
          <SearchFilters
            search={search}
            onSearchChange={setSearch}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Filter Sidebar */}
        <FilterSidebar onFiltersChange={setSidebarFilters} isLoading={false} />

        {/* Token Grid - Scrollable */}
        <div className="border-border-default flex-1 overflow-y-auto border-l">
          <TokenGrid filters={filters} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}
