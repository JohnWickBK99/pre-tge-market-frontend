import Image from 'next/image';

export function TGEInformation() {
  const tgeData = [
    {
      icon: '/icons/calendar-notification.svg',
      label: 'TGE Date',
      value: '9/25/2025',
    },
    { icon: '/icons/tag.svg', label: 'TGE Exchange', value: '--' },
    { icon: '/icons/telegram.svg', label: 'TGE Date', value: '9/25/2025' },
  ];

  return (
    <div className="border-border-default flex flex-col gap-4 border-b p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image src="/icons/calendar.svg" alt="TGE" width={24} height={24} />
        <span className="text-text-primary text-lg leading-7 font-semibold">
          TGE Information
        </span>
      </div>

      {/* TGE Data */}
      <div className="flex gap-0">
        {tgeData.map((item, index) => (
          <div key={index} className="flex flex-1 items-center gap-4">
            <div className="border-border-default bg-layer-2 flex items-center justify-center rounded-md border p-[9px]">
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            </div>
            <div className="flex w-[101px] flex-col">
              <span className="text-text-secondary text-sm leading-5">
                {item.label}
              </span>
              <span className="text-text-primary text-xl leading-7 font-semibold">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
