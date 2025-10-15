'use client';

import { useState } from 'react';

/**
 * Footer Component - Bottom bar with live indicator, trading mode, and social links
 * Sticky at the bottom
 */
export function Footer() {
  const [tradingMode, setTradingMode] = useState<'basic' | 'pro'>('pro');

  return (
    <footer className="bg-layer-1 border-border-default sticky bottom-0 z-40 h-10 border-t">
      <div className="flex h-full items-center justify-between px-2">
        {/* Left Section: Live Indicator & Trading Mode */}
        <div className="flex items-center gap-10">
          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <div className="bg-success size-2.5 animate-pulse rounded-full" />
            <span className="text-text-primary text-sm">Live</span>
          </div>

          {/* Trading Mode Toggle */}
          <div className="flex items-center gap-4">
            <span className="text-text-secondary text-sm">Trading mode:</span>
            <div className="bg-layer-2 border-border-default flex items-center gap-0.5 rounded-md border p-0.5">
              <button
                onClick={() => setTradingMode('basic')}
                className={`rounded px-1.5 py-0.5 text-xs transition-colors ${
                  tradingMode === 'basic'
                    ? 'bg-layer-focus text-text-inverse'
                    : 'text-text-primary hover:text-text-focus'
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => setTradingMode('pro')}
                className={`rounded px-1.5 py-0.5 text-xs transition-colors ${
                  tradingMode === 'pro'
                    ? 'bg-layer-focus text-text-inverse'
                    : 'text-text-primary hover:text-text-focus'
                }`}
              >
                Pro
              </button>
            </div>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-text-tertiary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
          Copyright © 2025 Pre-TGE. All rights reserved.
        </div>

        {/* Right Section: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-text-focus transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-text-focus transition-colors"
            aria-label="Discord"
          >
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-text-focus transition-colors"
            aria-label="Telegram"
          >
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

