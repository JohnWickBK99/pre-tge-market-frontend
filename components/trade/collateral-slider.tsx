'use client';

import { Slider } from '@/components/ui/slider';
import Image from 'next/image';

interface CollateralSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function CollateralSlider({ value, onChange }: CollateralSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-text-primary text-sm leading-5">Collateral</span>
        <Image
          src="/icons/info.svg"
          alt="Info"
          width={12}
          height={12}
          className="text-icon-secondary"
        />
      </div>

      <div className="flex flex-col gap-2">
        {/* Labels */}
        <div className="text-text-primary flex justify-between text-sm leading-5">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>100%</span>
        </div>

        {/* Slider */}
        <Slider
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          max={100}
          step={25}
          className="w-full"
        />
      </div>
    </div>
  );
}
