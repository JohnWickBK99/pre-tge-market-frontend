import { Badge } from '@/components/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';

interface TradeHeaderProps {
  symbol?: string;
}

export function TradeHeader({ symbol }: TradeHeaderProps) {
  const hasSymbol = symbol && symbol !== '';

  return (
    <div className="border-border-default flex flex-col gap-6 border-b bg-black px-6 py-6">
      {/* Breadcrumb & Create Order Button */}
      {hasSymbol && (
        <div className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-text-secondary text-sm leading-5"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-text-primary text-sm leading-5">
                  {symbol}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Create Order Button */}
          <button className="bg-button-primary flex h-9 items-center gap-2 rounded-full px-4 py-2 text-sm leading-5 font-medium text-black transition-opacity hover:opacity-90">
            <Image src="/icons/plus.svg" alt="Plus" width={14} height={14} />
            Create Order
          </button>
        </div>
      )}

      {/* Token Info & Best Price */}
      <div className="flex items-end justify-between">
        {/* Left: Token Info */}
        {hasSymbol ? (
          <div className="flex gap-4">
            {/* Token Avatar */}
            <div className="relative size-[60px] shrink-0">
              <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-orange-900 via-red-900 to-orange-800">
                <span className="text-xl font-semibold text-white">
                  {symbol}
                </span>
              </div>
            </div>

            {/* Token Details */}
            <div className="flex flex-col gap-2">
              {/* Name & Social Links */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-3xl leading-9 font-medium">
                  <span className="text-text-primary">Plasma</span>
                  <span className="text-text-secondary">{symbol}</span>
                </div>

                <div className="bg-border-default h-7 w-px" />

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="text-icon-secondary"
                  />
                  <Image
                    src="/icons/discord.svg"
                    alt="Discord"
                    width={20}
                    height={20}
                    className="text-icon-secondary"
                  />
                  <Image
                    src="/icons/telegram.svg"
                    alt="Telegram"
                    width={20}
                    height={20}
                    className="text-icon-secondary"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="text-success border-border-default bg-layer-2 text-xs leading-4"
                >
                  Layer 1
                </Badge>
                <Badge
                  variant="outline"
                  className="border-border-default bg-layer-2 text-warning text-xs leading-4"
                >
                  Ethereum
                </Badge>
                <Badge
                  variant="outline"
                  className="text-button-primary border-border-default bg-layer-2 text-xs leading-4"
                >
                  Mainnet
                </Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            {/* Unknown Token */}
            <div className="relative size-[60px] shrink-0">
              <div className="bg-layer-3 flex size-full items-center justify-center rounded-full">
                <span className="text-text-tertiary text-xl font-semibold">
                  ?
                </span>
              </div>
            </div>

            {/* Unknown Details */}
            <div className="flex flex-col justify-center gap-2">
              <div className="text-3xl leading-9 font-medium">
                <span className="text-text-tertiary">Unknown</span>
              </div>
            </div>
          </div>
        )}

        {/* Right: Best Price */}
        <div className="flex flex-col items-end">
          <span className="text-text-secondary text-sm leading-5">
            Best Price
          </span>
          <span className="text-text-primary text-3xl leading-9 font-semibold">
            {hasSymbol ? '$0.6716' : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}
