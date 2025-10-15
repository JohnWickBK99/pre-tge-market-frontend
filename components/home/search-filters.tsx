'use client';

import { useDebounce } from '@/hooks/use-debounce';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ViewMode = 'grid' | 'list';
type SortBy = 'newest' | 'oldest' | 'price' | 'volume';
type SortOrder = 'ascending' | 'descending';

interface SearchFiltersProps {
  search: string;
  onSearchChange: (search: string) => void;
  sortBy: SortBy;
  onSortByChange: (sort: SortBy) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const SORT_BY_OPTIONS: { value: SortBy; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'price', label: 'Price' },
  { value: 'volume', label: 'Volume' },
];

const SORT_ORDER_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: 'descending', label: 'Descending' },
  { value: 'ascending', label: 'Ascending' },
];

export function SearchFilters({
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  viewMode,
  onViewModeChange,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(search);
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);
  const [showSortOrderDropdown, setShowSortOrderDropdown] = useState(false);

  // Debounce search query
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Update parent when debounced search changes
  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  const selectedSortBy = SORT_BY_OPTIONS.find((opt) => opt.value === sortBy);
  const selectedSortOrder = SORT_ORDER_OPTIONS.find(
    (opt) => opt.value === sortOrder
  );

  return (
    <div className="flex items-center justify-between">
      {/* Left side - Search and sort */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="bg-layer-2 flex h-9 w-[358px] items-center gap-1.5 rounded-md px-4 py-2">
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="shrink-0"
          />
          <input
            type="text"
            placeholder="Search by token symbol..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-text-secondary placeholder:text-text-secondary flex-1 bg-transparent text-sm leading-5 outline-none"
          />
        </div>

        {/* Sort By dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortByDropdown(!showSortByDropdown)}
            className="border-border-default bg-layer-1 flex h-9 w-[177px] items-center gap-1.5 rounded-md border px-4 py-2"
          >
            <Image
              src="/icons/sort.svg"
              alt="Sort"
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="text-text-primary flex-1 text-left text-sm leading-5">
              {selectedSortBy?.label}
            </span>
            <Image
              src="/icons/chevron-down.svg"
              alt="Dropdown"
              width={20}
              height={20}
              className={`shrink-0 transition-transform ${showSortByDropdown ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown menu */}
          {showSortByDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowSortByDropdown(false)}
              />
              <div className="border-border-default bg-layer-2 absolute top-full z-20 mt-1 w-[177px] rounded-md border shadow-lg">
                {SORT_BY_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortByChange(option.value);
                      setShowSortByDropdown(false);
                    }}
                    className={`text-text-primary hover:bg-layer-1 flex w-full items-center px-4 py-2 text-left text-sm leading-5 transition-colors first:rounded-t-md last:rounded-b-md ${
                      sortBy === option.value ? 'bg-layer-1' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sort Order dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortOrderDropdown(!showSortOrderDropdown)}
            className="border-border-default bg-layer-1 flex h-9 w-[177px] items-center gap-1.5 rounded-md border px-4 py-2"
          >
            <Image
              src="/icons/sort-down.svg"
              alt="Sort Order"
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="text-text-primary flex-1 text-left text-sm leading-5">
              {selectedSortOrder?.label}
            </span>
            <Image
              src="/icons/chevron-down.svg"
              alt="Dropdown"
              width={20}
              height={20}
              className={`shrink-0 transition-transform ${showSortOrderDropdown ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown menu */}
          {showSortOrderDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowSortOrderDropdown(false)}
              />
              <div className="border-border-default bg-layer-2 absolute top-full z-20 mt-1 w-[177px] rounded-md border shadow-lg">
                {SORT_ORDER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortOrderChange(option.value);
                      setShowSortOrderDropdown(false);
                    }}
                    className={`text-text-primary hover:bg-layer-1 flex w-full items-center px-4 py-2 text-left text-sm leading-5 transition-colors first:rounded-t-md last:rounded-b-md ${
                      sortOrder === option.value ? 'bg-layer-1' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right side - View mode toggle */}
      <div className="flex items-start gap-2">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`flex size-9 items-center justify-center rounded-md px-4 py-2 ${
            viewMode === 'grid'
              ? 'bg-layer-focus'
              : 'border-border-default bg-layer-1 border'
          }`}
        >
          <Image
            src="/icons/grid.svg"
            alt="Grid view"
            width={20}
            height={20}
            className={
              viewMode === 'grid' ? 'text-text-inverse' : 'text-icon-tertiary'
            }
          />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`flex size-9 items-center justify-center rounded-md px-4 py-2 ${
            viewMode === 'list'
              ? 'bg-layer-focus'
              : 'border-border-default bg-layer-1 border'
          }`}
        >
          <Image
            src="/icons/list.svg"
            alt="List view"
            width={20}
            height={20}
            className={
              viewMode === 'list' ? 'text-text-inverse' : 'text-icon-tertiary'
            }
          />
        </button>
      </div>
    </div>
  );
}
