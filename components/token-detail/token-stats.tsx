import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export function TokenStats() {
  const stats = [
    { label: 'Total Supply', value: '10B' },
    { label: 'Max Supply', value: '10B' },
    { label: 'Volume 24h', value: '$1.7B' },
    { label: 'Total Raised', value: 'Total Raised' },
    { label: 'Performance vs.', value: 'Total Raised' },
  ];

  const performanceData = [
    { label: '1h', value: '4.8%', isPositive: true },
    { label: '24h', value: '0.7%', isPositive: true },
    { label: '7d', value: '-36.685%', isPositive: false },
    { label: '1h', value: '$9.3B', isPositive: true },
    { label: '1h', value: '$9.3B', isPositive: true },
    { label: '1h', value: '$9.3B', isPositive: true },
  ];

  return (
    <div className="flex w-[450px] flex-col gap-6 p-6">
      {/* Market Cap & FDV */}
      <div className="border-border-default bg-layer-2 flex items-center rounded-md border py-2">
        <div className="border-border-default flex flex-1 flex-col items-center border-r">
          <span className="text-text-secondary text-sm leading-5">
            Market Cap
          </span>
          <span className="text-warning text-xl leading-7 font-semibold">
            $1.6B
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <span className="text-text-secondary text-sm leading-5">FDV</span>
          <span className="text-button-primary text-xl leading-7 font-semibold">
            $9.3B
          </span>
        </div>
      </div>

      {/* Circulating Supply */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-sm leading-5">
            Circ. Supply
          </span>
          <div className="flex items-center gap-1">
            <span className="text-text-secondary text-sm leading-5">18%</span>
            <Image src="/icons/dot.svg" alt="•" width={16} height={16} />
            <span className="text-text-primary text-sm leading-5 font-semibold">
              1.8B
            </span>
          </div>
        </div>
        <Progress value={18} className="h-2" />
      </div>

      {/* Stats List */}
      <div className="flex flex-col gap-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex items-center justify-between text-sm leading-5">
              <span className="text-text-secondary">{stat.label}</span>
              <span className="text-text-primary font-medium">
                {stat.value}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className="bg-border-default my-4 h-px w-full" />
            )}
          </div>
        ))}
      </div>

      {/* Performance Grid */}
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {performanceData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-layer-2 flex h-16 flex-col items-center justify-center rounded-md p-2"
            >
              <span
                className={`text-lg leading-7 font-semibold ${
                  item.isPositive ? 'text-success' : 'text-error'
                }`}
              >
                {item.value}
              </span>
              <span className="text-text-secondary text-sm leading-5">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {performanceData.slice(3).map((item, index) => (
            <div
              key={index}
              className="bg-layer-2 flex h-16 flex-col items-center justify-center rounded-md p-2"
            >
              <span className="text-success text-lg leading-7 font-semibold">
                {item.value}
              </span>
              <span className="text-text-secondary text-sm leading-5">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
