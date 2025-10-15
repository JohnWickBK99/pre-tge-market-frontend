import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';

interface TokenCardProps {
  name: string;
  symbol: string;
  network: string;
  image: string;
  bgColor: string;
  totalOffer: string;
  totalValue: string;
  description?: string;
  settleDuration: string;
  percentCollateral: string;
  progressPercent: number;
  remainingAmount: string;
  price: string;
  tokenSymbol: string;
}

export function TokenCard({
  name,
  symbol,
  network,
  image,
  bgColor,
  totalOffer,
  totalValue,
  description = 'No description',
  settleDuration,
  percentCollateral,
  progressPercent,
  remainingAmount,
  price,
  tokenSymbol,
}: TokenCardProps) {
  return (
    <Link href={`/token/${symbol.toLowerCase()}`}>
      <Card className="hover:border-border-focus flex cursor-pointer flex-col p-3 transition-all">
        <CardHeader className="p-0">
          {/* Token Image Container */}
          <div className="border-border-default relative h-48 w-full overflow-hidden rounded-2xl border">
            <div
              className={`flex h-full w-full items-center justify-center ${bgColor}`}
            >
              <span className="text-2xl font-semibold text-white">
                {symbol}
              </span>
            </div>

            {/* Network Badge - Top Left */}
            <Badge variant="network" className="absolute top-2 left-2">
              {network}
            </Badge>

            {/* Settle Duration & Collateral Badges - Bottom Left */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              <Badge variant="success">{settleDuration}</Badge>
              <Badge variant="warning">{percentCollateral}</Badge>
            </div>
          </div>
        </CardHeader>

        {/* Token Info */}
        <CardContent className="flex flex-col gap-2 p-0 py-3">
          {/* Offer & Value Section */}
          <div className="flex flex-col gap-0">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-lg leading-7">
                Total Offer
              </span>
              <span className="text-text-primary text-lg leading-7">
                {totalOffer}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-lg leading-7">
                Total Value
              </span>
              <span className="text-text-primary text-lg leading-7">
                {totalValue}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <span className="text-text-secondary line-clamp-2 text-sm leading-5">
              {description}
            </span>
          </div>

          {/* Divider */}
          <div className="bg-border-default h-px w-full" />

          {/* Progress & Price Section */}
          <div className="flex items-end justify-between">
            {/* Progress */}
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="text-text-secondary text-xs leading-4">
                  {progressPercent}%
                </span>
                <Image
                  src="/icons/dot.svg"
                  alt="•"
                  width={16}
                  height={16}
                  className="opacity-50"
                />
                <span className="text-text-secondary text-xs leading-4">
                  {remainingAmount} left
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </div>

            {/* Price */}
            <div className="flex flex-col items-end gap-1">
              <span className="text-text-primary text-2xl leading-6 font-normal">
                {price}
              </span>
              <div className="flex items-center gap-1">
                <div className="relative size-4">
                  <div className="bg-layer-2 flex size-full items-center justify-center rounded-full">
                    <span className="text-text-primary text-[8px]">
                      {tokenSymbol.slice(0, 1)}
                    </span>
                  </div>
                </div>
                <span className="text-text-secondary text-xs leading-3">
                  {tokenSymbol}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
