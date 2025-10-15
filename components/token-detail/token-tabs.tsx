import Image from 'next/image';

type TabType = 'info' | 'trade';

interface TokenTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TokenTabs({ activeTab, onTabChange }: TokenTabsProps) {
  return (
    <div className="border-border-default flex border-b">
      <button
        onClick={() => onTabChange('info')}
        className={`border-border-default flex items-center gap-2 px-4 pb-2 ${
          activeTab === 'info' ? 'border-b-text-primary border-b-[1px]' : ''
        }`}
      >
        <Image
          src="/icons/info.svg"
          alt="Info"
          width={16}
          height={16}
          className={
            activeTab === 'info' ? 'text-text-primary' : 'text-text-tertiary'
          }
        />
        <span
          className={`text-base leading-6 font-medium ${
            activeTab === 'info' ? 'text-text-primary' : 'text-text-tertiary'
          }`}
        >
          Info
        </span>
      </button>

      <button
        onClick={() => onTabChange('trade')}
        className={`flex items-center gap-2 px-4 pb-2 ${
          activeTab === 'trade' ? 'border-b-text-primary border-b-[1px]' : ''
        }`}
      >
        <Image
          src="/icons/coin.svg"
          alt="Trade"
          width={16}
          height={16}
          className={
            activeTab === 'trade' ? 'text-text-primary' : 'text-text-tertiary'
          }
        />
        <span
          className={`text-base leading-6 font-medium ${
            activeTab === 'trade' ? 'text-text-primary' : 'text-text-tertiary'
          }`}
        >
          Trade
        </span>
      </button>
    </div>
  );
}
