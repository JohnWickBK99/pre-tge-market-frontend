// import { Service } from '@/services'; // Uncomment when ready to use real API
import type { Token, TokenFilter } from '@/services/token.service';
import { useInfiniteScroll } from './use-infinite-scroll';

// ============================================
// MOCK DATA - Remove when using real API
// ============================================

const generateMockToken = (
  id: number,
  name: string,
  symbol: string,
  network: string,
  bgColor: string,
  settleDuration: string = '2hrs',
  percentCollateral: string = '50%'
): Token => ({
  id: id.toString(),
  name,
  symbol,
  network,
  image: '',
  bgColor,
  totalOffer: '10,400 MET',
  totalValue: '14,559 $USD',
  description: 'No description',
  settleDuration,
  percentCollateral,
  progressPercent: 25,
  remainingAmount: '7844 MET',
  price: '$1.4',
  tokenSymbol: 'MET',
  sellerAvatar: `https://i.pravatar.cc/150?img=${id}`,
  sellerAddress: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`,
  sellerRating: Math.floor(Math.random() * 3) + 3, // Random 3-5
  createdAt: `2024-01-${String(id).padStart(2, '0')}T00:00:00Z`,
  updatedAt: `2024-01-${String(id).padStart(2, '0')}T00:00:00Z`,
});

const mockTokens: Token[] = [
  generateMockToken(
    1,
    'MET TGE',
    '$MET TGE',
    'Solana',
    'bg-gradient-to-br from-orange-900 via-red-900 to-orange-800',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    2,
    'theoriq',
    'theoriq',
    'Ethereum',
    'bg-gradient-to-br from-yellow-300 to-yellow-400',
    '2hrs',
    '25%'
  ),
  generateMockToken(
    3,
    'BASE',
    'BASE',
    'Base',
    'bg-gradient-to-br from-blue-500 to-blue-700',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    4,
    'MET TGE',
    '$MET TGE',
    'Solana',
    'bg-gradient-to-br from-orange-900 via-red-900 to-orange-800',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    5,
    'theoriq',
    'theoriq',
    'Ethereum',
    'bg-gradient-to-br from-yellow-300 to-yellow-400',
    '2hrs',
    '25%'
  ),
  generateMockToken(
    6,
    'BASE',
    'BASE',
    'Base',
    'bg-gradient-to-br from-blue-500 to-blue-700',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    7,
    'MET TGE',
    '$MET TGE',
    'Solana',
    'bg-gradient-to-br from-orange-900 via-red-900 to-orange-800',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    8,
    'theoriq',
    'theoriq',
    'Ethereum',
    'bg-gradient-to-br from-yellow-300 to-yellow-400',
    '2hrs',
    '25%'
  ),
  generateMockToken(
    9,
    'BASE',
    'BASE',
    'Base',
    'bg-gradient-to-br from-blue-500 to-blue-700',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    10,
    'Arbitrum',
    'ARB',
    'Arbitrum',
    'bg-gradient-to-br from-blue-600 to-cyan-500',
    '4hrs',
    '75%'
  ),
  generateMockToken(
    11,
    'Optimism',
    'OP',
    'Optimism',
    'bg-gradient-to-br from-red-500 to-pink-500',
    '1hrs',
    '25%'
  ),
  generateMockToken(
    12,
    'Polygon',
    'MATIC',
    'Polygon',
    'bg-gradient-to-br from-purple-600 to-indigo-600',
    '6hrs',
    '100%'
  ),
  generateMockToken(
    13,
    'Avalanche',
    'AVAX',
    'Avalanche',
    'bg-gradient-to-br from-red-600 to-orange-500',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    14,
    'Cosmos',
    'ATOM',
    'Cosmos',
    'bg-gradient-to-br from-indigo-600 to-purple-600',
    '12hrs',
    '75%'
  ),
  generateMockToken(
    15,
    'Polkadot',
    'DOT',
    'Polkadot',
    'bg-gradient-to-br from-pink-500 to-rose-600',
    '4hrs',
    '50%'
  ),
  generateMockToken(
    16,
    'Chainlink',
    'LINK',
    'Ethereum',
    'bg-gradient-to-br from-blue-500 to-blue-800',
    '2hrs',
    '25%'
  ),
  generateMockToken(
    17,
    'Uniswap',
    'UNI',
    'Ethereum',
    'bg-gradient-to-br from-pink-500 to-purple-600',
    '1hrs',
    '100%'
  ),
  generateMockToken(
    18,
    'Starknet',
    'STRK',
    'Starknet',
    'bg-gradient-to-br from-purple-500 to-indigo-700',
    '2hrs',
    '50%'
  ),
  generateMockToken(
    19,
    'zkSync',
    'ZK',
    'zkSync',
    'bg-gradient-to-br from-gray-700 to-gray-900',
    '6hrs',
    '75%'
  ),
  generateMockToken(
    20,
    'Sui',
    'SUI',
    'Sui',
    'bg-gradient-to-br from-blue-400 to-cyan-600',
    '2hrs',
    '25%'
  ),
  generateMockToken(
    21,
    'Aptos',
    'APT',
    'Aptos',
    'bg-gradient-to-br from-emerald-500 to-teal-700',
    '4hrs',
    '50%'
  ),
];

/**
 * Mock API call function
 * Simulates fetching tokens from backend with pagination
 */
const fetchMockTokens = async (
  page: number,
  filters?: Omit<TokenFilter, 'page' | 'limit'>
): Promise<{
  success: boolean;
  data: {
    data: Token[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}> => {
  // Simulate network delay (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Filter tokens based on search query
  let filteredTokens = [...mockTokens];

  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filteredTokens = filteredTokens.filter(
      (token) =>
        token.symbol.toLowerCase().includes(searchLower) ||
        token.name.toLowerCase().includes(searchLower)
    );
  }

  // Filter by network
  if (filters?.network_id && filters.network_id !== 'All Network') {
    filteredTokens = filteredTokens.filter(
      (token) => token.network === filters.network_id
    );
  }

  // Sort tokens
  if (filters?.sortField) {
    filteredTokens.sort((a, b) => {
      const aValue = a[filters.sortField as keyof Token];
      const bValue = b[filters.sortField as keyof Token];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return filters.sortOrder === 'asc' ? comparison : -comparison;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return filters.sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }

  // Pagination
  const limit = 12;
  const totalTokens = filteredTokens.length;
  const totalPages = Math.ceil(totalTokens / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTokens = filteredTokens.slice(startIndex, endIndex);

  return {
    success: true,
    data: {
      data: paginatedTokens,
      pagination: {
        total: totalTokens,
        page,
        limit,
        totalPages,
      },
    },
  };
};

// ============================================
// END MOCK DATA
// ============================================

/**
 * Infinite Scroll Hook for Tokens
 *
 * Currently using MOCK DATA for development.
 *
 * To switch to real API:
 * 1. Uncomment the Service import at the top
 * 2. Replace fetchMockTokens with Service.token.getTokens
 * 3. Remove mock data section
 *
 * Example after switching to real API:
 * ```typescript
 * queryFn: (page) =>
 *   Service.token.getTokens({
 *     ...filters,
 *     page,
 *     limit: 12,
 *   }),
 * ```
 *
 * @example
 * ```tsx
 * const {
 *   tokens,
 *   isLoading,
 *   isFetchingNextPage,
 *   hasNextPage,
 *   observerRef,
 * } = useTokensInfinite({
 *   search: 'BTC',
 *   network_id: 'Ethereum',
 * });
 * ```
 */
export function useTokensInfinite(
  filters?: Omit<TokenFilter, 'page' | 'limit'>
) {
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
  } = useInfiniteScroll<Token>({
    queryKey: ['tokens', 'infinite', filters],
    // Using mock data - replace with real API when ready
    queryFn: (page) => fetchMockTokens(page, filters),
    // Real API version (commented out):
    // queryFn: (page) =>
    //   Service.token.getTokens({
    //     ...filters,
    //     page,
    //     limit: 12,
    //   }),
    onError: (err) => {
      console.error('Failed to fetch tokens:', err);
    },
  });

  return {
    tokens: data,
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
