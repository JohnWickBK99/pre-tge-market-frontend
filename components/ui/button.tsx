import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-layer-focus text-text-inverse hover:opacity-90 active:opacity-80',
        primary:
          'bg-button-primary text-text-inverse hover:opacity-90 active:opacity-80',
        secondary:
          'bg-layer-2 text-text-primary border border-border-default hover:bg-layer-focus hover:text-text-inverse',
        ghost:
          'text-text-primary hover:bg-layer-2 hover:text-text-focus active:bg-layer-2',
        success:
          'bg-success text-text-inverse hover:opacity-90 active:opacity-80',
        error: 'bg-error text-text-inverse hover:opacity-90 active:opacity-80',
        'success-outline':
          'bg-success/15 border border-success/15 text-success hover:bg-success/25 active:bg-success/30',
        'error-outline':
          'bg-error/15 border border-error/15 text-error hover:bg-error/25 active:bg-error/30',
      },
      size: {
        sm: 'h-6 px-2 py-1 text-xs',
        md: 'h-9 px-4 py-2 text-sm',
        lg: 'h-12 px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
