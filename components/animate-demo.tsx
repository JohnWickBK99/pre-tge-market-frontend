'use client';

import { cn } from '@/lib/utils';

/**
 * Tailwind CSS Animate Demo Component
 * Demonstrates animations from tailwindcss-animate plugin
 */
export function AnimateDemo() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold">Tailwind CSS Animate Examples</h3>

      {/* Fade In */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Fade In:</p>
        <div className="flex gap-4">
          <div className="animate-in fade-in rounded-lg border bg-blue-500 p-4 text-white">
            Fade In
          </div>
        </div>
      </div>

      {/* Slide In */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Slide In:</p>
        <div className="flex gap-4">
          <div className="animate-in slide-in-from-left rounded-lg border bg-green-500 p-4 text-white">
            From Left
          </div>
          <div className="animate-in slide-in-from-right rounded-lg border bg-green-500 p-4 text-white">
            From Right
          </div>
          <div className="animate-in slide-in-from-top rounded-lg border bg-green-500 p-4 text-white">
            From Top
          </div>
          <div className="animate-in slide-in-from-bottom rounded-lg border bg-green-500 p-4 text-white">
            From Bottom
          </div>
        </div>
      </div>

      {/* Zoom In */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Zoom In:</p>
        <div className="flex gap-4">
          <div className="animate-in zoom-in rounded-lg border bg-purple-500 p-4 text-white">
            Zoom In
          </div>
          <div className="animate-in zoom-in-50 rounded-lg border bg-purple-500 p-4 text-white">
            Zoom In 50%
          </div>
          <div className="animate-in zoom-in-95 rounded-lg border bg-purple-500 p-4 text-white">
            Zoom In 95%
          </div>
        </div>
      </div>

      {/* Spin */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Spin:</p>
        <div className="flex gap-4">
          <div className="animate-in spin-in rounded-lg border bg-orange-500 p-4 text-white">
            Spin In
          </div>
        </div>
      </div>

      {/* Duration & Delay */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Duration & Delay:</p>
        <div className="flex gap-4">
          <div className="animate-in fade-in rounded-lg border bg-red-500 p-4 text-white duration-1000">
            1000ms
          </div>
          <div className="animate-in fade-in rounded-lg border bg-red-500 p-4 text-white delay-500 duration-1000">
            Delay 500ms
          </div>
          <div className="animate-in fade-in rounded-lg border bg-red-500 p-4 text-white delay-1000 duration-1000">
            Delay 1000ms
          </div>
        </div>
      </div>

      {/* Combined Animations */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Combined Animations:</p>
        <div className="flex gap-4">
          <div
            className={cn(
              'animate-in fade-in zoom-in slide-in-from-bottom',
              'duration-1000',
              'rounded-lg border bg-gradient-to-r from-pink-500 to-violet-500 p-4 text-white'
            )}
          >
            Fade + Zoom + Slide
          </div>
        </div>
      </div>

      {/* Bounce & Pulse */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Continuous Animations:</p>
        <div className="flex gap-4">
          <div className="animate-bounce rounded-lg border bg-cyan-500 p-4 text-white">
            Bounce
          </div>
          <div className="animate-pulse rounded-lg border bg-cyan-500 p-4 text-white">
            Pulse
          </div>
          <div className="animate-spin rounded-lg border bg-cyan-500 p-4 text-white">
            Spin
          </div>
          <div className="animate-ping rounded-lg border bg-cyan-500 p-4 text-white">
            Ping
          </div>
        </div>
      </div>
    </div>
  );
}
