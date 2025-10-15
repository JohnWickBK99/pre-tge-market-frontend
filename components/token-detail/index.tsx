'use client';

import { useState } from 'react';
import { ExchangesList } from './exchanges-list';
import { InvestorsList } from './investors-list';
import { SocialStats } from './social-stats';
import { TGEInformation } from './tge-information';
import { TokenChart } from './token-chart';
import { TokenDetailHeader } from './token-detail-header';
import { TokenStats } from './token-stats';
import { TokenTabs } from './token-tabs';

interface TokenDetailPageProps {
  symbol: string;
}

type TabType = 'info' | 'trade';

export function TokenDetailPage({ symbol }: TokenDetailPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');

  return (
    <div className="border-border-default flex h-full flex-1 flex-col border-x">
      {/* Header */}
      <TokenDetailHeader symbol={symbol} />

      {/* Tabs */}
      <TokenTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      {activeTab === 'info' && (
        <>
          {/* Chart & Stats Section */}
          <div className="border-border-default flex border-b">
            {/* Left: Chart */}
            <TokenChart />

            {/* Right: Stats */}
            <TokenStats />
          </div>

          {/* Social Stats */}
          <SocialStats />

          {/* Investors & Exchanges */}
          <div className="border-border-default flex border-b">
            <InvestorsList />
            <ExchangesList />
          </div>

          {/* TGE Information */}
          <TGEInformation />
        </>
      )}

      {activeTab === 'trade' && (
        <div className="flex flex-1 items-center justify-center p-24">
          <span className="text-text-secondary text-lg">
            Trade view coming soon...
          </span>
        </div>
      )}
    </div>
  );
}
