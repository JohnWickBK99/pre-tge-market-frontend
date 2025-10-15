export function OrderSummary() {
  const summaryItems = [
    { label: 'Amount', value: '--' },
    { label: 'At a rate of', value: '--' },
    { label: 'You will receive', value: '--' },
    { label: 'Your locked collateral', value: '--' },
    { label: 'Platform Fee', value: '--' },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-text-primary text-sm leading-5 font-medium">
        You are creating an order for:
      </p>

      <div className="flex flex-col gap-3">
        {summaryItems.map((item, index) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-sm leading-5">
              <span className="text-text-tertiary">{item.label}</span>
              <span className="text-text-primary font-medium">
                {item.value}
              </span>
            </div>
            {index < summaryItems.length - 1 && (
              <div className="bg-border-default mt-3 h-px w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
