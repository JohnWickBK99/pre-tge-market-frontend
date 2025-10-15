'use client';

import Image from 'next/image';
import { useState } from 'react';

type TimePeriod = '24h' | '7d' | '1m' | '3m' | '1y';

export function TokenChart() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('7d');

  const periods: { value: TimePeriod; label: string }[] = [
    { value: '24h', label: '24h' },
    { value: '7d', label: '7d' },
    { value: '1m', label: '1m' },
    { value: '3m', label: '3m' },
    { value: '1y', label: '1y' },
  ];

  return (
    <div className="border-border-default flex h-[579px] flex-1 flex-col border-r">
      {/* Price Header */}
      <div className="border-border-default flex items-center justify-between border-b p-6">
        {/* Left: Price Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-text-secondary text-sm leading-5">
              XPL Price
            </span>
            <div className="border-border-default bg-layer-2 flex items-center gap-2 rounded-md border px-[6px] py-[2px]">
              <span className="text-text-primary text-xs leading-4">USD</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-text-primary text-xl leading-7 font-semibold">
              $0.6716
            </span>
            <div className="flex items-center gap-1">
              <Image
                src="/icons/arrow-down-right.svg"
                alt="Down"
                width={16}
                height={16}
                className="text-error"
              />
              <span className="text-error text-xs leading-4">-3.7%</span>
            </div>
            <span className="text-text-secondary text-xs leading-4">
              (-$0.5444)
            </span>
          </div>
        </div>

        {/* Right: Time Period Selector */}
        <div className="border-border-default bg-layer-2 flex items-center gap-1 rounded-md border p-1">
          {periods.map((period) => (
            <button
              key={period.value}
              onClick={() => setTimePeriod(period.value)}
              className={`rounded-md px-[6px] py-[2px] text-xs leading-4 transition-colors ${
                timePeriod === period.value
                  ? 'bg-layer-focus text-black'
                  : 'text-text-primary'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative flex-1">
        <div className="flex h-full items-center justify-center">
          <span className="text-text-tertiary text-sm">
            Chart visualization will be here
          </span>
        </div>
      </div>
    </div>
  );
}
