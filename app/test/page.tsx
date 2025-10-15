'use client';

import { AnimateDemo } from '@/components/animate-demo';
import { BadgeDemo } from '@/components/badge-demo';
import { ButtonDemo } from '@/components/button-demo';
import { ColorDemo } from '@/components/color-demo';
import { ScrollbarDemo } from '@/components/scrollbar-demo';
import { cn } from '@/lib/utils';
import { useExampleStore } from '@/stores/example-store';
import { useState } from 'react';

export default function Home() {
  const { count, increment, decrement, reset } = useExampleStore();
  const [activeTab, setActiveTab] = useState<
    | 'intro'
    | 'zustand'
    | 'animations'
    | 'scrollbar'
    | 'colors'
    | 'buttons'
    | 'badges'
  >('intro');

  return (
    <div className="min-h-screen p-8">
      <main className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-top text-center duration-700">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Pre-TGE Market
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            NextJS 15 + Tailwind CSS 4 + TypeScript Base Template
          </p>
        </div>

        {/* Tabs */}
        <div className="animate-in fade-in slide-in-from-bottom mt-12 flex justify-center gap-2 delay-200 duration-700">
          <button
            onClick={() => setActiveTab('intro')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'intro'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab('zustand')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'zustand'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Zustand Demo
          </button>
          <button
            onClick={() => setActiveTab('animations')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'animations'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Animations
          </button>
          <button
            onClick={() => setActiveTab('scrollbar')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'scrollbar'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Scrollbar
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'colors'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Colors
          </button>
          <button
            onClick={() => setActiveTab('buttons')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'buttons'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Buttons
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={cn(
              'rounded-lg px-6 py-2 font-medium transition-all',
              activeTab === 'badges'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            Badges
          </button>
        </div>

        {/* Content */}
        <div className="mt-12">
          {/* Intro Tab */}
          {activeTab === 'intro' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <h2 className="mb-6 text-2xl font-semibold">
                  Features Included
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-500">Framework</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ NextJS 15 with App Router</li>
                      <li>✅ TypeScript with strict mode</li>
                      <li>✅ React 19</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-500">Styling</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ Tailwind CSS 4</li>
                      <li>✅ tailwindcss-animate</li>
                      <li>✅ tailwind-scrollbar</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-500">
                      State & Data
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ Zustand for state management</li>
                      <li>✅ React Query for data fetching</li>
                      <li>✅ Axios with interceptors</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-orange-500">
                      Code Quality
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ Prettier with auto-import</li>
                      <li>✅ ESLint configuration</li>
                      <li>✅ PostCSS & Autoprefixer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Zustand Demo Tab */}
          {activeTab === 'zustand' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <h2 className="text-2xl font-semibold">Zustand Store Demo</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  State management với persist và devtools
                </p>
                <div className="text-6xl font-bold">{count}</div>
                <div className="flex gap-2">
                  <button
                    onClick={decrement}
                    className={cn(
                      'rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-all',
                      'hover:scale-105 hover:bg-red-600 active:scale-95 active:bg-red-700'
                    )}
                  >
                    Decrement
                  </button>
                  <button
                    onClick={reset}
                    className={cn(
                      'rounded-lg bg-gray-500 px-6 py-3 font-medium text-white transition-all',
                      'hover:scale-105 hover:bg-gray-600 active:scale-95 active:bg-gray-700'
                    )}
                  >
                    Reset
                  </button>
                  <button
                    onClick={increment}
                    className={cn(
                      'rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-all',
                      'hover:scale-105 hover:bg-green-600 active:scale-95 active:bg-green-700'
                    )}
                  >
                    Increment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Animations Tab */}
          {activeTab === 'animations' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <AnimateDemo />
              </div>
            </div>
          )}

          {/* Scrollbar Tab */}
          {activeTab === 'scrollbar' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <ScrollbarDemo />
              </div>
            </div>
          )}

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <ColorDemo />
              </div>
            </div>
          )}

          {/* Buttons Tab */}
          {activeTab === 'buttons' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <ButtonDemo />
              </div>
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === 'badges' && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <BadgeDemo />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
