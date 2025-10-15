import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';

interface TokenListItemProps {
  name: string;
  symbol: string;
  image: string;
  bgColor: string;
  progressPercent: number;
  remainingAmount: string;
  price: string;
  percentCollateral: string;
  settleDuration: string;
  sellerAvatar: string;
  sellerAddress: string;
  sellerRating: number;
}

export function TokenListItem({
  name,
  symbol,
  image,
  bgColor,
  progressPercent,
  remainingAmount,
  price,
  percentCollateral,
  settleDuration,
  sellerAvatar,
  sellerAddress,
  sellerRating,
}: TokenListItemProps) {
  return (
    <Link href={`/token/${symbol.toLowerCase()}`}>
      <Card className="hover:border-border-focus cursor-pointer transition-all">
        <CardContent className="flex items-center gap-4 p-4">
          {/* Token Icon & Name - Fixed width */}
          <div className="flex w-[207px] items-center gap-4">
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-full ${bgColor}`}
            >
              <span className="text-base font-semibold text-white">
                {symbol}
              </span>
            </div>
            <span className="text-text-primary text-base leading-6 font-semibold">
              {name}
            </span>
          </div>

          {/* Progress Section - Flexible */}
          <div className="flex min-w-0 flex-1 flex-col gap-2 pr-3">
            <div className="flex items-center gap-1">
              <span className="text-text-secondary text-xs leading-4">
                {progressPercent}%
              </span>
              <span className="text-text-secondary">•</span>
              <span className="text-text-secondary text-xs leading-4">
                {remainingAmount} left
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>

          {/* Price Section - Fixed width */}
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-text-secondary text-sm leading-5">Price</span>
            <span className="text-text-primary text-lg leading-7">{price}</span>
          </div>

          {/* Collateral & Settle Duration - Fixed width */}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex items-start gap-2 text-sm leading-5">
              <span className="text-text-secondary">Collateral:</span>
              <span className="text-text-primary font-medium">
                {percentCollateral}
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm leading-5">
              <span className="text-text-secondary">Settle Duration:</span>
              <span className="text-text-primary font-medium">
                {settleDuration}
              </span>
            </div>
          </div>

          {/* Seller Info - Fixed width */}
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src={sellerAvatar}
                alt={sellerAddress}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="text-text-primary truncate text-sm leading-5 font-medium">
                {sellerAddress}
              </span>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/star.svg"
                  alt="Rating"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                <span className="text-text-secondary text-sm leading-5 font-medium">
                  {sellerRating}
                </span>
              </div>
            </div>
          </div>

          {/* External Link Button */}
          <button className="border-border-default bg-layer-2 flex size-6 shrink-0 items-center justify-center rounded-md border p-1 transition-opacity hover:opacity-70">
            <Image
              src="/icons/external-link.svg"
              alt="External link"
              width={14}
              height={14}
            />
          </button>
        </CardContent>
      </Card>
    </Link>
  );
}
