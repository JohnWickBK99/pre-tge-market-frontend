import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function InvestorsList() {
  const investors = [
    {
      name: 'Cobie',
      type: 'Angel Investor',
      tier: 'Tier 1',
      tierColor: 'warning',
    },
    {
      name: 'Framework Ventures',
      type: 'Ventures Capital',
      tier: 'Tier 1',
      tierColor: 'warning',
    },
    {
      name: '6MV (6th Man Ventures)',
      type: 'Ventures Capital',
      tier: 'Tier 2',
      tierColor: 'button-primary',
    },
    {
      name: 'Founders Fund',
      type: 'Ventures Capital',
      tier: 'Tier 2',
      tierColor: 'button-primary',
    },
    {
      name: 'Framework Ventures',
      type: 'Ventures Capital',
      tier: 'Tier 3',
      tierColor: 'success',
    },
    {
      name: 'Framework Ventures',
      type: 'Ventures Capital',
      tier: 'Not Rated',
      tierColor: 'tertiary',
    },
  ];

  return (
    <div className="border-border-default flex flex-1 flex-col gap-6 border-r p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src="/icons/star-badge.svg"
          alt="Investors"
          width={24}
          height={24}
        />
        <span className="text-text-primary text-lg leading-7 font-semibold">
          Investors
        </span>
      </div>

      {/* Investors List */}
      <div className="flex flex-col gap-4">
        {investors.map((investor, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-gray-500" />
                <div className="flex w-[121px] flex-col">
                  <span className="text-text-primary text-sm leading-5">
                    {investor.name}
                  </span>
                  <span className="text-text-secondary text-xs leading-4">
                    {investor.type}
                  </span>
                </div>
              </div>
              <Badge
                variant="outline"
                className={`border-border-default bg-layer-2 text-${investor.tierColor} text-xs leading-4`}
              >
                {investor.tier}
              </Badge>
            </div>
            {index < investors.length - 1 && (
              <div className="bg-border-default my-4 h-px w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
