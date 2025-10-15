'use client';

/**
 * TopBar Component - Ticker bar showing live transactions
 * Sticky at the top with infinite scroll animation
 */
export function TopBar() {
  const transactions = [
    {
      wallet: '0x33E3...72E7',
      action: 'bought',
      size: 'Size: 561,200 THQ | Ask: 84,741 USD1',
      price: '$285',
    },
    {
      wallet: '0xB004...B428',
      action: 'bought',
      size: 'Size: 693,900 THQ | Ask: 157,515 USDT',
      price: '$856',
    },
    {
      wallet: '0x91E1...b09D',
      action: 'bought',
      size: 'Size: 303,200 THQ | Ask: 56,092 USDT',
      price: '$408',
    },
    {
      wallet: '0xA29F...B8C6',
      action: 'bought',
      size: 'Size: 81,800 BASE | Ask: 122,700 $USD',
      price: '$149',
    },
    {
      wallet: '0x68d4...a698',
      action: 'bought',
      size: 'Size: 805,700 THQ | Ask: 128,912 USDC',
      price: '$108',
    },
  ];

  return (
    <div className="bg-layer-2 border-border-default sticky top-0 z-50 h-7 overflow-hidden border-b">
      <div className="animate-scroll flex h-full">
        {/* Duplicate for seamless loop */}
        {[...transactions, ...transactions].map((tx, index) => (
          <div
            key={index}
            className="border-border-default flex items-center gap-2 border-r px-2 py-1 text-sm whitespace-nowrap"
          >
            <span className="text-text-primary font-medium">{tx.wallet}</span>
            <span className="text-text-secondary">{tx.action}</span>
            <span className="text-text-primary">{tx.size}</span>
            <span className="text-text-secondary">for</span>
            <span className="text-success font-medium">{tx.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

