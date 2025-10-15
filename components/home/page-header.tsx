export function PageHeader() {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <h1 className="via-text-primary bg-gradient-to-r from-[#989897] to-[#989897] bg-clip-text text-4xl leading-10 font-semibold text-transparent">
        The Premier Pre-Launch Marketplace
      </h1>
      <p className="text-text-secondary text-base leading-6">
        Buy or sell your lighter points OTC to other counter parties.{' '}
        <span className="text-text-focus">1.5% fee, 100% as collateral</span>
      </p>
    </div>
  );
}
