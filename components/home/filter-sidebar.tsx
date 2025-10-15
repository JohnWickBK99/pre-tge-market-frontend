'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useState } from 'react';

interface FilterSidebarProps {
  onFiltersChange?: (filters: FilterState) => void;
  isLoading?: boolean;
}

export interface FilterState {
  settleDuration: string[];
  networks: string[];
  tokens: string[];
  percentCollateral: string[];
}

const SETTLE_DURATIONS = [
  '1 Hour',
  '2 Hours',
  '4 Hours',
  '6 Hours',
  '12 Hours',
];

const NETWORKS = [
  { id: 'bnb', name: 'BNB Chain' },
  { id: 'arbitrum', name: 'Arbitrum' },
  { id: 'solana', name: 'Solana' },
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'base', name: 'Base' },
];

const TOKENS = [
  { id: 'met', name: 'MET' },
  { id: 'thq', name: 'THQ' },
  { id: 'base', name: 'BASE' },
  { id: 'ofc', name: 'OFC' },
];

const PERCENT_COLLATERAL = ['25%', '50%', '75%', '100%'];

export function FilterSidebar({
  onFiltersChange,
  isLoading = false,
}: FilterSidebarProps) {
  const [settleDuration, setSettleDuration] = useState<string[]>(['1 Hour']);
  const [networks, setNetworks] = useState<string[]>([]);
  const [tokens, setTokens] = useState<string[]>([]);
  const [percentCollateral, setPercentCollateral] = useState<string[]>([]);

  const handleReset = () => {
    setSettleDuration(['1 Hour']);
    setNetworks([]);
    setTokens([]);
    setPercentCollateral([]);
    onFiltersChange?.({
      settleDuration: ['1 Hour'],
      networks: [],
      tokens: [],
      percentCollateral: [],
    });
  };

  const handleSettleDurationToggle = (duration: string) => {
    const newDuration = settleDuration.includes(duration)
      ? settleDuration.filter((d) => d !== duration)
      : [...settleDuration, duration];
    setSettleDuration(newDuration);
    onFiltersChange?.({
      settleDuration: newDuration,
      networks,
      tokens,
      percentCollateral,
    });
  };

  const handleNetworkToggle = (networkId: string) => {
    const newNetworks = networks.includes(networkId)
      ? networks.filter((n) => n !== networkId)
      : [...networks, networkId];
    setNetworks(newNetworks);
    onFiltersChange?.({
      settleDuration,
      networks: newNetworks,
      tokens,
      percentCollateral,
    });
  };

  const handleTokenToggle = (tokenId: string) => {
    const newTokens = tokens.includes(tokenId)
      ? tokens.filter((t) => t !== tokenId)
      : [...tokens, tokenId];
    setTokens(newTokens);
    onFiltersChange?.({
      settleDuration,
      networks,
      tokens: newTokens,
      percentCollateral,
    });
  };

  const handlePercentToggle = (percent: string) => {
    const newPercent = percentCollateral.includes(percent)
      ? percentCollateral.filter((p) => p !== percent)
      : [...percentCollateral, percent];
    setPercentCollateral(newPercent);
    onFiltersChange?.({
      settleDuration,
      networks,
      tokens,
      percentCollateral: newPercent,
    });
  };

  if (isLoading) {
    return (
      <div className="bg-layer-1 flex h-full w-[280px] flex-col">
        {/* Header Skeleton */}
        <div className="border-border-default flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-2">
            <Skeleton className="size-5" />
            <Skeleton className="h-6 w-12" />
          </div>
          <Skeleton className="h-6 w-12" />
        </div>

        {/* Sections Skeleton */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border-border-default flex flex-col gap-6 border-b px-6 py-4 last:border-b-0"
          >
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-32" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-9 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-layer-1 flex h-full w-[280px] flex-col">
      {/* Filter Header - px-6 py-4 */}
      <div className="border-border-default flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/icons/filter.svg" alt="Filter" width={20} height={20} />
          <span className="text-text-primary text-base leading-6 font-semibold">
            Filter
          </span>
        </div>
        <button
          onClick={handleReset}
          className="text-text-focus text-base leading-6 font-semibold transition-opacity hover:opacity-80"
        >
          Reset
        </button>
      </div>

      {/* Accordion Sections */}
      <Accordion
        type="multiple"
        defaultValue={[
          'settle-duration',
          'network',
          'token',
          'percent-collateral',
        ]}
        className="w-full"
      >
        {/* Settle Duration Section */}
        <AccordionItem
          value="settle-duration"
          className="border-border-default border-b"
        >
          <div className="px-6 py-4">
            <AccordionTrigger className="py-0">
              Settle Duration
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
              <div className="flex flex-wrap gap-2">
                {SETTLE_DURATIONS.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => handleSettleDurationToggle(duration)}
                    className={`rounded-full p-2 text-sm leading-5 transition-colors ${
                      settleDuration.includes(duration)
                        ? 'bg-layer-focus text-text-inverse font-medium'
                        : 'bg-layer-2 text-text-primary'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>

        {/* Network Section */}
        <AccordionItem
          value="network"
          className="border-border-default border-b"
        >
          <div className="px-6 py-4">
            <AccordionTrigger className="py-0">Network</AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
              <div className="flex flex-col gap-4">
                {NETWORKS.map((network) => (
                  <div key={network.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={networks.includes(network.id)}
                      onCheckedChange={() => handleNetworkToggle(network.id)}
                    />
                    <div className="flex items-center gap-1.5">
                      <div className="relative size-5">
                        <div className="bg-layer-2 flex size-full items-center justify-center rounded-full">
                          <span className="text-text-primary text-[10px]">
                            {network.name.slice(0, 1)}
                          </span>
                        </div>
                      </div>
                      <span className="text-text-primary text-sm leading-5">
                        {network.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>

        {/* Token Section */}
        <AccordionItem value="token" className="border-border-default border-b">
          <div className="px-6 py-4">
            <AccordionTrigger className="py-0">Token</AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {TOKENS.slice(0, 2).map((token) => (
                    <div
                      key={token.id}
                      className="flex flex-1 items-center gap-2"
                    >
                      <Checkbox
                        checked={tokens.includes(token.id)}
                        onCheckedChange={() => handleTokenToggle(token.id)}
                      />
                      <div className="flex items-center gap-1.5">
                        <div className="relative size-5">
                          <div className="bg-layer-2 flex size-full items-center justify-center rounded-full">
                            <span className="text-text-primary text-[10px]">
                              {token.name.slice(0, 1)}
                            </span>
                          </div>
                        </div>
                        <span className="text-text-primary text-sm leading-5">
                          {token.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {TOKENS.slice(2, 4).map((token) => (
                    <div
                      key={token.id}
                      className="flex flex-1 items-center gap-2"
                    >
                      <Checkbox
                        checked={tokens.includes(token.id)}
                        onCheckedChange={() => handleTokenToggle(token.id)}
                      />
                      <div className="flex items-center gap-1.5">
                        <div className="relative size-5">
                          <div className="bg-layer-2 flex size-full items-center justify-center rounded-full">
                            <span className="text-text-primary text-[10px]">
                              {token.name.slice(0, 1)}
                            </span>
                          </div>
                        </div>
                        <span className="text-text-primary text-sm leading-5">
                          {token.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>

        {/* Percent Collateral Section */}
        <AccordionItem value="percent-collateral">
          <div className="px-6 py-4">
            <AccordionTrigger className="py-0">
              Percent Collateral
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {PERCENT_COLLATERAL.slice(0, 2).map((percent) => (
                    <div
                      key={percent}
                      className="flex flex-1 items-center gap-2"
                    >
                      <Checkbox
                        checked={percentCollateral.includes(percent)}
                        onCheckedChange={() => handlePercentToggle(percent)}
                      />
                      <span className="text-text-primary text-sm leading-5">
                        {percent}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {PERCENT_COLLATERAL.slice(2, 4).map((percent) => (
                    <div
                      key={percent}
                      className="flex flex-1 items-center gap-2"
                    >
                      <Checkbox
                        checked={percentCollateral.includes(percent)}
                        onCheckedChange={() => handlePercentToggle(percent)}
                      />
                      <span className="text-text-primary text-sm leading-5">
                        {percent}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
