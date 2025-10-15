# React Hooks Documentation

## Infinite Scroll Hook

### Overview

The `useInfiniteScroll` hook provides a reusable solution for implementing infinite scroll/load more functionality with React Query's `useInfiniteQuery`.

### Features

- ✅ **Auto-load on scroll** - Uses Intersection Observer
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Reusable** - Works with any paginated API
- ✅ **Optimized** - Automatic data flattening and caching
- ✅ **Error handling** - Built-in error callbacks
- ✅ **Loading states** - Initial loading and fetch next page states

---

## Core Hook: `useInfiniteScroll`

### Usage

```typescript
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';

function MyComponent() {
  const {
    data,              // Flattened array of all items
    totalCount,        // Total count from API
    isLoading,         // Initial loading state
    isFetchingNextPage, // Loading next page state
    hasNextPage,       // Has more pages to load
    fetchNextPage,     // Manual trigger function
    observerRef,       // Ref for intersection observer
  } = useInfiniteScroll({
    queryKey: ['items'],
    queryFn: (page) => fetchItems(page),
    initialLimit: 12,
  });

  return (
    <div>
      {data.map(item => <Item key={item.id} {...item} />)}
      
      {/* This element triggers auto-load when visible */}
      <div ref={observerRef}>Loading...</div>
    </div>
  );
}
```

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `queryKey` | `any[]` | Yes | - | React Query key for caching |
| `queryFn` | `(page: number) => Promise<PaginatedData<T>>` | Yes | - | Function that fetches data for a page |
| `initialLimit` | `number` | No | `12` | Items per page |
| `enabled` | `boolean` | No | `true` | Enable/disable the query |
| `onSuccess` | `(data) => void` | No | - | Success callback |
| `onError` | `(error) => void` | No | - | Error callback |

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `data` | `T[]` | Flattened array of all loaded items |
| `allPages` | `PaginatedData<T>[]` | Raw pages data |
| `totalCount` | `number` | Total count from API |
| `isLoading` | `boolean` | Initial loading state |
| `isError` | `boolean` | Error state |
| `error` | `Error \| null` | Error object |
| `isFetchingNextPage` | `boolean` | Loading next page state |
| `hasNextPage` | `boolean` | Has more pages to load |
| `fetchNextPage` | `() => void` | Manual trigger to load next page |
| `observerRef` | `React.RefObject<HTMLDivElement>` | Ref to attach to observer target |

---

## Specific Hooks

### `useTokensInfinite`

Pre-configured hook for tokens list with infinite scroll.

```typescript
import { useTokensInfinite } from '@/hooks/use-tokens-infinite';

function TokenList() {
  const {
    tokens,
    totalCount,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    observerRef,
  } = useTokensInfinite({
    search: 'BTC',
    network_id: '1',
    sortField: 'createdAt',
    sortOrder: 'desc',
  });

  return (
    <div>
      {tokens.map(token => <TokenCard key={token.id} {...token} />)}
      
      {hasNextPage && (
        <div ref={observerRef}>
          {isFetchingNextPage ? 'Loading more...' : 'Scroll for more'}
        </div>
      )}
    </div>
  );
}
```

### `useUsersInfinite`

Example hook for users list (template for creating new hooks).

```typescript
import { useUsersInfinite } from '@/hooks/use-users-infinite';

function UserList() {
  const { users, isLoading, observerRef } = useUsersInfinite({
    search: 'john',
    role: 'admin',
  });

  return (
    <div>
      {users.map(user => <UserCard key={user.id} {...user} />)}
      <div ref={observerRef} />
    </div>
  );
}
```

---

## Creating Custom Infinite Scroll Hooks

### Template

```typescript
import { Service } from '@/services';
import type { YourEntity } from '@/services/your-service';
import { useInfiniteScroll } from './use-infinite-scroll';

export function useYourEntitiesInfinite(filters?: YourFiltersType) {
  const {
    data,
    totalCount,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerRef,
  } = useInfiniteScroll<YourEntity>({
    queryKey: ['your-entities', 'infinite', filters],
    queryFn: (page) =>
      Service.yourEntity.getEntities({
        ...filters,
        page,
        limit: 12,
      }),
    onError: (err) => {
      console.error('Failed to fetch:', err);
    },
  });

  return {
    entities: data,
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
```

---

## Debounce Hook

### `useDebounce`

Delays updating a value until after a specified delay. Useful for search inputs.

```typescript
import { useDebounce } from '@/hooks/use-debounce';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    // This only runs 500ms after user stops typing
    fetchResults(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `value` | `T` | Yes | - | The value to debounce |
| `delay` | `number` | No | `500` | Delay in milliseconds |

---

## Best Practices

### 1. Query Keys

Use descriptive and consistent query keys:

```typescript
// Good
queryKey: ['tokens', 'infinite', filters]

// Bad
queryKey: ['data']
```

### 2. Loading States

Show appropriate loading indicators:

```typescript
{isLoading && <InitialSkeleton />}
{isFetchingNextPage && <LoadingMoreIndicator />}
```

### 3. Empty States

Always handle empty results:

```typescript
{data.length === 0 && !isLoading && (
  <EmptyState message="No results found" />
)}
```

### 4. Error Handling

Provide error callbacks for logging:

```typescript
useInfiniteScroll({
  // ...
  onError: (error) => {
    console.error('Failed to fetch data:', error);
    toast.error('Failed to load data');
  },
});
```

### 5. Observer Placement

Place the observer ref on a visible element:

```typescript
// Good - Visible trigger element
<div ref={observerRef} className="py-8 text-center">
  Loading more...
</div>

// Bad - Hidden element
<div ref={observerRef} style={{ display: 'none' }} />
```

### 6. Manual Trigger

Provide a manual load more button as fallback:

```typescript
{hasNextPage && (
  <>
    <div ref={observerRef} />
    <button onClick={() => fetchNextPage()}>
      Load More
    </button>
  </>
)}
```

---

## Complete Example

```typescript
'use client';

import { useTokensInfinite } from '@/hooks/use-tokens-infinite';
import { TokenCard } from './token-card';
import { TokenCardSkeleton } from './token-card-skeleton';

export function TokenGrid({ filters }) {
  const {
    tokens,
    totalCount,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    observerRef,
  } = useTokensInfinite(filters);

  return (
    <div className="space-y-6">
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          // Initial loading
          Array.from({ length: 8 }).map((_, i) => (
            <TokenCardSkeleton key={i} />
          ))
        ) : tokens.length > 0 ? (
          // Data
          tokens.map((token) => (
            <TokenCard key={token.id} {...token} />
          ))
        ) : (
          // Empty state
          <div className="col-span-full text-center">
            <p>No tokens found</p>
          </div>
        )}

        {/* Loading more */}
        {isFetchingNextPage &&
          Array.from({ length: 4 }).map((_, i) => (
            <TokenCardSkeleton key={`loading-${i}`} />
          ))}
      </div>

      {/* Observer trigger */}
      {hasNextPage && (
        <div ref={observerRef} className="text-center py-8">
          {isFetchingNextPage ? 'Loading more...' : 'Scroll for more'}
        </div>
      )}

      {/* Count */}
      {!isLoading && tokens.length > 0 && (
        <p className="text-center text-sm text-gray-500">
          Showing {tokens.length} of {totalCount} tokens
        </p>
      )}
    </div>
  );
}
```

---

## Performance Tips

1. **Memoize filters** - Prevent unnecessary re-renders
2. **Use pagination** - Don't load everything at once
3. **Optimize observer** - Use appropriate `rootMargin` and `threshold`
4. **Cache data** - React Query handles this automatically
5. **Debounce search** - Use `useDebounce` for search inputs

---

## Troubleshooting

### Observer not triggering

- Check that observer ref is attached to a visible element
- Verify the element is in the viewport
- Check browser console for errors

### Duplicate requests

- Ensure query keys are stable
- Check for unnecessary re-renders
- Use React DevTools to debug

### Memory leaks

- The hook automatically cleans up observers
- If manually using observers, ensure cleanup in useEffect

---

## Related Hooks

- `useQuery` - For non-paginated data
- `useDebounce` - For search inputs
- `useIntersectionObserver` - Lower-level observer hook

