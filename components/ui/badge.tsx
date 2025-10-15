import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-2xl px-[9px] py-[3px] text-xs font-medium leading-4 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-layer-focus text-text-inverse',
        primary: 'bg-button-primary/15 text-button-primary',
        success: 'bg-success text-text-inverse border border-black/20',
        warning: 'bg-button-primary text-text-inverse border border-black/20',
        error: 'bg-error/15 text-error',
        outline: 'border border-border-default text-text-primary',
        network: 'bg-black border border-black/20 text-white',
        tba: 'bg-button-primary border border-black/20 text-text-inverse',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
