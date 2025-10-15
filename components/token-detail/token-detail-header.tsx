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

interface TokenDetailHeaderProps {
  symbol: string;
}

export function TokenDetailHeader({ symbol }: TokenDetailHeaderProps) {
  return (
    <div className="border-border-default flex flex-col gap-6 border-b bg-black px-6 py-6">
      {/* Breadcrumb */}
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

      {/* Token Info & Create Order */}
      <div className="flex items-end justify-between gap-4">
        {/* Left: Token Info */}
        <div className="flex min-w-0 flex-1 gap-4">
          {/* Token Avatar */}
          <div className="relative size-[60px] shrink-0">
            <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-orange-900 via-red-900 to-orange-800">
              <span className="text-xl font-semibold text-white">{symbol}</span>
            </div>
          </div>

          {/* Token Details */}
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {/* Name & Social Links */}
            <div className="flex min-w-0 flex-wrap items-center gap-4">
              <div className="flex items-center gap-4 text-2xl leading-8 font-semibold">
                <span className="text-text-primary">Plasma</span>
                <span className="text-text-secondary">{symbol}</span>
              </div>

              <div className="bg-border-default hidden h-7 w-px md:block" />

              {/* Social Icons */}
              <div className="flex shrink-0 items-center gap-3">
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

            {/* Description */}
            <p className="text-text-secondary line-clamp-2 text-xs leading-4">
              Plasma is a high-throughput execution environment for Bitcoin that
              enables 1,000 transactions per second while inheriting
              Bitcoin&apos;s security. With Plasma, developers can build on
              Bitcoin without limits.
            </p>

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

        {/* Right: Create Order Button */}
        <button className="bg-button-primary flex h-9 shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm leading-5 font-medium text-black transition-opacity hover:opacity-90">
          <Image src="/icons/plus.svg" alt="Plus" width={14} height={14} />
          Create Order
        </button>
      </div>
    </div>
  );
}
