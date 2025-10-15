'use client';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';
import { useEffect } from 'react';

/**
 * DayJS Provider
 * Configures dayjs with plugins and custom locale settings
 */
export function DayJsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Extend dayjs with plugins
    dayjs.extend(localizedFormat);
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.extend(utc);

    // Update locale with custom relative time format
    dayjs.updateLocale('en', {
      relativeTime: {
        past: (input: unknown) =>
          input === 'just now' ? input : input + ' ago',
        s: 'just now',
        future: 'in %s',
        ss: '%d seconds',
        m: '1m',
        mm: '%dm',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1M',
        MM: '%dM',
        y: '1y',
        yy: '%dy',
      },
    });
  }, []);

  return <>{children}</>;
}
