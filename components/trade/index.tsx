'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CollateralSlider } from './collateral-slider';
import { OrderSummary } from './order-summary';
import { SwapFields } from './swap-fields';
import { TradeHeader } from './trade-header';

export function TradePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const symbolFromQuery = searchParams.get('symbol');

  const [collateral, setCollateral] = useState(50);
  const [buyAmount, setBuyAmount] = useState('0');
  const [sellAmount, setSellAmount] = useState('0');
  const [buyToken, setBuyToken] = useState(
    symbolFromQuery ? symbolFromQuery.toUpperCase() : ''
  );
  const [sellToken, setSellToken] = useState('ETH');

  const handleBuyTokenChange = (token: string) => {
    setBuyToken(token);
    router.push(`/trade?symbol=${token.toLowerCase()}`);
  };

  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="border-border-default mx-auto flex h-full w-full max-w-[600px] flex-1 flex-col border-x">
        {/* Header Section */}
        <TradeHeader symbol={buyToken} />

        {/* Swap Section */}
        <div className="border-border-default border-b">
          <SwapFields
            buyToken={buyToken}
            sellToken={sellToken}
            buyAmount={buyAmount}
            sellAmount={sellAmount}
            onBuyTokenChange={handleBuyTokenChange}
            onSellTokenChange={setSellToken}
            onBuyAmountChange={setBuyAmount}
            onSellAmountChange={setSellAmount}
          />
        </div>

        {/* Collateral Slider Section */}
        <div className="border-border-default border-b bg-black px-6 py-4">
          <CollateralSlider value={collateral} onChange={setCollateral} />
        </div>

        {/* Connect Wallet Button */}
        <div className="border-border-default border-b bg-black px-6 py-4">
          <button className="bg-button-primary flex h-12 w-full items-center justify-center rounded-full text-base leading-6 font-medium text-black transition-opacity hover:opacity-90">
            Connect Wallet
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-black px-6 py-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
