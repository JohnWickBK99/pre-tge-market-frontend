'use client';

import { cn } from '@/lib/utils';

/**
 * Tailwind Scrollbar Demo Component
 * Demonstrates how to use tailwind-scrollbar plugin
 */
export function ScrollbarDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">
          Tailwind Scrollbar Examples
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Custom scrollbar styling với tailwind-scrollbar plugin. Hãy scroll để
          xem sự khác biệt!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Default Scrollbar */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            1. Default Scrollbar
          </p>
          <div
            className={cn(
              'h-48 overflow-y-scroll rounded-lg border border-gray-300 bg-gray-50 p-4',
              'scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100',
              'hover:scrollbar-thumb-gray-500',
              'dark:border-gray-700 dark:bg-gray-900',
              'dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800',
              'dark:hover:scrollbar-thumb-gray-500'
            )}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-sm">
                📜 Line {i + 1}: Default width scrollbar with gray color
              </p>
            ))}
          </div>
        </div>

        {/* Thin Scrollbar */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
            2. Thin Scrollbar (Blue)
          </p>
          <div
            className={cn(
              'h-48 overflow-y-scroll rounded-lg border border-blue-300 bg-blue-50 p-4',
              'scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100',
              'hover:scrollbar-thumb-blue-600',
              'dark:border-blue-700 dark:bg-blue-950',
              'dark:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-900',
              'dark:hover:scrollbar-thumb-blue-300'
            )}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-sm">
                💙 Line {i + 1}: Thin scrollbar với màu xanh
              </p>
            ))}
          </div>
        </div>

        {/* Green Thin Scrollbar */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            3. Green Thin Scrollbar
          </p>
          <div
            className={cn(
              'h-48 overflow-y-scroll rounded-lg border border-green-300 bg-green-50 p-4',
              'scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-100',
              'hover:scrollbar-thumb-green-600',
              'dark:border-green-700 dark:bg-green-950',
              'dark:scrollbar-thumb-green-400 dark:scrollbar-track-green-900',
              'dark:hover:scrollbar-thumb-green-300'
            )}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-sm">
                💚 Line {i + 1}: Màu xanh lá với hover effect
              </p>
            ))}
          </div>
        </div>

        {/* Purple Thin Scrollbar */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
            4. Purple Thin Scrollbar
          </p>
          <div
            className={cn(
              'h-48 overflow-y-scroll rounded-lg border border-purple-300 bg-purple-50 p-4',
              'scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100',
              'hover:scrollbar-thumb-purple-600',
              'dark:border-purple-700 dark:bg-purple-950',
              'dark:scrollbar-thumb-purple-400 dark:scrollbar-track-purple-900',
              'dark:hover:scrollbar-thumb-purple-300'
            )}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-sm">
                💜 Line {i + 1}: Màu tím gradient style
              </p>
            ))}
          </div>
        </div>

        {/* Hidden Scrollbar */}
        <div className="space-y-2 md:col-span-2">
          <p className="text-sm font-medium text-orange-700 dark:text-orange-400">
            5. Hidden Scrollbar (vẫn scroll được)
          </p>
          <div
            className={cn(
              'scrollbar-hide h-48 overflow-y-scroll rounded-lg border border-orange-300 bg-orange-50 p-4',
              'dark:border-orange-700 dark:bg-orange-950'
            )}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-sm">
                🔶 Line {i + 1}: Scrollbar bị ẩn nhưng vẫn có thể scroll bằng
                chuột hoặc touchpad
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scrollbar Demo */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
          6. Horizontal Scrollbar
        </p>
        <div
          className={cn(
            'overflow-x-scroll rounded-lg border border-cyan-300 bg-cyan-50 p-4',
            'scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-cyan-100',
            'hover:scrollbar-thumb-cyan-600',
            'dark:border-cyan-700 dark:bg-cyan-950',
            'dark:scrollbar-thumb-cyan-400 dark:scrollbar-track-cyan-900'
          )}
        >
          <div className="flex gap-4" style={{ width: '200%' }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded bg-cyan-200 p-4 dark:bg-cyan-800"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
