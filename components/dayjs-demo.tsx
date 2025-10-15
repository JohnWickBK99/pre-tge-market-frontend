'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export function DayJsDemo() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(dayjs().format('LLLL'));
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('LLLL'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Example dates for relative time
  const dates = [
    { label: 'Now', date: dayjs() },
    { label: '30 seconds ago', date: dayjs().subtract(30, 'seconds') },
    { label: '5 minutes ago', date: dayjs().subtract(5, 'minutes') },
    { label: '2 hours ago', date: dayjs().subtract(2, 'hours') },
    { label: '3 days ago', date: dayjs().subtract(3, 'days') },
    { label: '1 month ago', date: dayjs().subtract(1, 'month') },
    { label: '1 year ago', date: dayjs().subtract(1, 'year') },
  ];

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold">DayJS Demo</h2>
        <p className="text-text-secondary text-sm">
          Pre-configured DayJS with custom relative time format and plugins
        </p>
      </div>

      {/* Current Time */}
      <div className="bg-layer-2 rounded-lg p-6">
        <h3 className="text-text-secondary mb-2 text-sm font-semibold">
          Current Time
        </h3>
        <p className="text-text-focus font-mono text-2xl">{currentTime}</p>
      </div>

      {/* Relative Time Examples */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Relative Time (Custom Format)
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {dates.map(({ label, date }) => (
            <div
              key={label}
              className="border-border-default bg-layer-2 flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="text-text-secondary text-sm">{label}</p>
                <p className="text-text-tertiary font-mono text-xs">
                  {date.format('YYYY-MM-DD HH:mm:ss')}
                </p>
              </div>
              <p className="text-text-focus font-semibold">{date.fromNow()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Format Examples */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Format Examples</h3>
        <div className="grid gap-3">
          {[
            { format: 'YYYY-MM-DD', label: 'ISO Date' },
            { format: 'MM/DD/YYYY', label: 'US Date' },
            { format: 'DD/MM/YYYY', label: 'EU Date' },
            { format: 'HH:mm:ss', label: '24h Time' },
            { format: 'LT', label: 'Localized Time' },
            { format: 'LLL', label: 'Localized DateTime' },
          ].map(({ format, label }) => (
            <div
              key={format}
              className="border-border-default bg-layer-2 flex items-center justify-between rounded-lg border p-3"
            >
              <span className="text-text-secondary text-sm">{label}</span>
              <code className="bg-layer-1 text-text-primary rounded px-2 py-1 font-mono text-sm">
                {dayjs().format(format)}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Examples */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Duration Examples</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { duration: [90, 'minutes'], label: '90 minutes' },
            { duration: [5, 'hours'], label: '5 hours' },
            { duration: [2, 'days'], label: '2 days' },
            { duration: [3, 'months'], label: '3 months' },
          ].map(({ duration, label }) => (
            <div
              key={label}
              className="border-border-default bg-layer-2 flex items-center justify-between rounded-lg border p-3"
            >
              <span className="text-text-secondary text-sm">{label}</span>
              <span className="text-success font-semibold">
                {dayjs
                  .duration(duration[0] as number, duration[1] as any)
                  .humanize()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* UTC Example */}
      <div className="bg-layer-2 rounded-lg p-6">
        <h3 className="mb-4 text-lg font-semibold">UTC Time</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-text-secondary text-sm">Local Time:</span>
            <code className="text-text-primary font-mono text-sm">
              {dayjs().format('YYYY-MM-DD HH:mm:ss')}
            </code>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary text-sm">UTC Time:</span>
            <code className="text-text-focus font-mono text-sm">
              {dayjs().utc().format('YYYY-MM-DD HH:mm:ss')}
            </code>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="border-border-default bg-layer-2 rounded-lg border p-4">
        <p className="text-text-secondary text-sm">
          <span className="text-text-primary font-semibold">💡 Note:</span> All
          DayJS plugins are pre-configured in{' '}
          <code className="bg-layer-1 rounded px-1 font-mono text-xs">
            providers/dayjs-provider.tsx
          </code>
          . The custom relative time format shows "just now", "1m ago", "2h
          ago", instead of verbose formats.
        </p>
      </div>
    </div>
  );
}
