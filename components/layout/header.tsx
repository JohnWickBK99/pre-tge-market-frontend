'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

/**
 * Header Component - Main navigation
 * Sticky below TopBar with logo, nav menu, and connect wallet button
 */
export function Header() {
  return (
    <header className="bg-layer-1 border-border-default sticky top-7 z-40 h-17 border-b">
      <div className="flex h-full items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* TODO: Replace with actual logo */}
            <div className="text-text-primary text-xl font-semibold">
              ⚡ PRE-TGE
            </div>
          </div>
        </Link>

        {/* Navigation Menu - Centered */}
        <nav className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <Link
            href="/trade"
            className="text-text-primary hover:text-text-focus text-sm font-medium transition-colors"
          >
            Trade
          </Link>
          <Link
            href="/list-token"
            className="text-text-primary hover:text-text-focus text-sm font-medium transition-colors"
          >
            List Token
          </Link>
          <Link
            href="/analysis"
            className="text-text-primary hover:text-text-focus text-sm font-medium transition-colors"
          >
            Analysis
          </Link>
        </nav>

        {/* Connect Wallet Button */}
        <div className="flex items-center gap-2">
          <Button variant="primary" size="md">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}

