'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { useState } from 'react';

interface SwapFieldsProps {
  buyToken: string;
  sellToken: string;
  buyAmount: string;
  sellAmount: string;
  onBuyTokenChange: (token: string) => void;
  onSellTokenChange: (token: string) => void;
  onBuyAmountChange: (amount: string) => void;
  onSellAmountChange: (amount: string) => void;
}

type OrderType = 'buy' | 'sell';

export function SwapFields({
  buyToken,
  sellToken,
  buyAmount,
  sellAmount,
  onBuyTokenChange,
  onSellTokenChange,
  onBuyAmountChange,
  onSellAmountChange,
}: SwapFieldsProps) {
  const [orderType, setOrderType] = useState<OrderType>('buy');

  return (
    <div className="relative bg-black px-6 pt-4 pb-4">
      {/* Order Type Toggle */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => setOrderType('buy')}
          className={`flex-1 rounded-full px-4 py-2 text-sm leading-5 font-medium transition-all ${
            orderType === 'buy'
              ? 'bg-button-primary text-black'
              : 'border-border-default bg-layer-2 text-text-secondary border'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setOrderType('sell')}
          className={`flex-1 rounded-full px-4 py-2 text-sm leading-5 font-medium transition-all ${
            orderType === 'sell'
              ? 'bg-button-primary text-black'
              : 'border-border-default bg-layer-2 text-text-secondary border'
          }`}
        >
          Sell
        </button>
      </div>

      {/* Buy Section */}
      <div className="border-border-default bg-layer-2 flex flex-col gap-4 rounded-t-2xl border p-4">
        <span className="text-text-tertiary text-sm leading-5 font-medium">
          Buy
        </span>

        <div className="flex items-center justify-between">
          {/* Token Select */}
          <Select value={buyToken} onValueChange={onBuyTokenChange}>
            <SelectTrigger className="border-border-default bg-layer-3 h-10 w-fit gap-4 rounded-full border px-4 py-2">
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="XPL">
                <div className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-gradient-to-br from-orange-900 to-orange-800" />
                  <span>XPL</span>
                </div>
              </SelectItem>
              <SelectItem value="ETH">
                <div className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
                  <span>ETH</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Amount Input */}
          <Input
            type="text"
            value={buyAmount}
            onChange={(e) => onBuyAmountChange(e.target.value)}
            placeholder="0"
            className="text-text-primary h-auto border-0 bg-transparent text-right text-3xl leading-9 font-semibold"
          />
        </div>
      </div>

      {/* Sell Section */}
      <div className="border-border-default bg-layer-2 flex flex-col gap-4 rounded-b-2xl border border-t-0 p-4">
        <div className="flex items-center justify-between">
          <span className="text-text-tertiary text-sm leading-5 font-medium">
            Sell
          </span>
          <span className="text-text-secondary text-sm leading-5">
            Balance: 0.00 ETH
          </span>
        </div>

        <div className="flex items-center justify-between">
          {/* Token Select */}
          <Select value={sellToken} onValueChange={onSellTokenChange}>
            <SelectTrigger className="border-border-default bg-layer-3 h-10 w-fit gap-4 rounded-full border px-4 py-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ETH">
                <div className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
                  <span>ETH</span>
                </div>
              </SelectItem>
              <SelectItem value="XPL">
                <div className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-gradient-to-br from-orange-900 to-orange-800" />
                  <span>XPL</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Amount Input */}
          <Input
            type="text"
            value={sellAmount}
            onChange={(e) => onSellAmountChange(e.target.value)}
            placeholder="0"
            className="text-text-primary h-auto border-0 bg-transparent text-right text-3xl leading-9 font-semibold"
          />
        </div>
      </div>

      {/* Swap Arrow Button */}
      <button className="border-border-default bg-layer-2 absolute top-[138px] left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full border transition-opacity hover:opacity-70">
        <Image
          src="/icons/arrow-down.svg"
          alt="Swap"
          width={20}
          height={20}
          className="text-icon-primary"
        />
      </button>
    </div>
  );
}
