'use client';

import { TokenDetailPage } from '@/components/token-detail';
import { use } from 'react';

interface PageProps {
  params: Promise<{ symbol: string }>;
}

export default function TokenDetailRoute({ params }: PageProps) {
  const { symbol } = use(params);

  return <TokenDetailPage symbol={symbol} />;
}
