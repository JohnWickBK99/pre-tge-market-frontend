import Image from 'next/image';

export function SocialStats() {
  const socialData = [
    {
      icon: '/icons/twitter.svg',
      count: '46,072',
      label: 'Twitter Followers',
    },
    {
      icon: '/icons/discord.svg',
      count: '46,072',
      label: 'Twitter Followers',
    },
    {
      icon: '/icons/telegram.svg',
      count: '46,072',
      label: 'Telegram Followers',
    },
    {
      icon: '/icons/github.svg',
      count: '0',
      label: 'GitHub Stars',
    },
  ];

  return (
    <div className="border-border-default flex gap-0 border-b p-6">
      {socialData.map((item, index) => (
        <div key={index} className="flex flex-1 items-center gap-4">
          <div className="border-border-default bg-layer-2 flex items-center justify-center rounded-md border p-[9px]">
            <Image src={item.icon} alt={item.label} width={24} height={24} />
          </div>
          <div className="flex w-[101px] flex-col">
            <span className="text-text-primary text-xl leading-7 font-semibold">
              {item.count}
            </span>
            <span className="text-text-secondary text-sm leading-5">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
