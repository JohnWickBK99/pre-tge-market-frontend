import Image from 'next/image';

export function ExchangesList() {
  const exchanges = [
    { name: 'Cobie', pair: 'XPL', price: '$1.26', volume: '$1,615,361,666.09' },
    { name: 'Cobie', pair: 'XPL', price: '$1.26', volume: '$1,615,361,666.09' },
    { name: 'Cobie', pair: 'XPL', price: '$1.26', volume: '$1,615,361,666.09' },
    { name: 'Cobie', pair: 'XPL', price: '$1.26', volume: '$1,615,361,666.09' },
    { name: 'Cobie', pair: 'XPL', price: '$1.26', volume: '$1,615,361,666.09' },
  ];

  return (
    <div className="border-border-default flex flex-1 flex-col gap-6 border-r p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src="/icons/navigation.svg"
          alt="Exchanges"
          width={24}
          height={24}
        />
        <span className="text-text-primary text-lg leading-7 font-semibold">
          Exchanges
        </span>
      </div>

      {/* Exchanges List */}
      <div className="flex flex-col gap-2">
        {exchanges.map((exchange, index) => (
          <div
            key={index}
            className="bg-layer-2 flex items-center justify-between rounded-md p-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-gray-500" />
              <div className="flex w-[121px] flex-col">
                <span className="text-text-primary text-sm leading-5">
                  {exchange.name}
                </span>
                <span className="text-text-secondary text-xs leading-4">
                  {exchange.pair}
                </span>
              </div>
            </div>
            <div className="flex w-[121px] flex-col items-end">
              <span className="text-text-primary text-sm leading-5">
                {exchange.price}
              </span>
              <span className="text-text-secondary text-xs leading-4">
                Vol: {exchange.volume}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
