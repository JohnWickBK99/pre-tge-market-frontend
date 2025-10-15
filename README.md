# Pre-TGE Market Frontend

Modern NextJS application with Tailwind CSS 4, TypeScript, React Query, and Zustand.

## Tech Stack

- **Framework**: NextJS 15 (App Router)
- **Styling**: Tailwind CSS 4 + tailwind-scrollbar + tailwindcss-animate
- **Design System**: Figma Variables synced (Dark Theme)
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query (React Query v5)
- **HTTP Client**: Axios
- **Build Tools**: PostCSS, Autoprefixer
- **Code Quality**: Prettier with auto-import organization
- **Utilities**: clsx, tailwind-merge, dayjs
- **UI Components**: Shadcn/UI with custom variants

## Project Structure

```
/
├── app/                    # NextJS App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Shared React components
│   ├── layout/           # Layout components (TopBar, Header, Footer)
│   └── ui/               # Shadcn UI components
├── providers/            # Application providers
│   ├── index.tsx         # Combined providers
│   ├── query-provider.tsx # React Query provider
│   └── dayjs-provider.tsx # DayJS configuration
├── lib/                   # Utilities and configurations
│   ├── utils.ts          # Utility functions (cn)
│   ├── axios.ts          # Axios instance with interceptors
│   └── query-client.ts   # React Query client config
├── services/             # API services
│   └── example-service.ts # Example API service template
├── stores/               # Zustand stores
│   └── example-store.ts  # Example store template
├── hooks/                # Custom React hooks
│   └── use-example-query.ts # Example React Query hook
├── types/                # TypeScript types and interfaces
│   └── index.ts          # Global types
├── constants/            # Application constants
│   └── index.ts          # App constants, routes, query keys
└── public/               # Static assets
```

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update environment variables in `.env.local` as needed.

### Development

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Linting & Formatting

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
# Auto-organizes imports and formats Tailwind classes
pnpm format
```

## Key Features

### Code Quality Tools

**Prettier Configuration:**

- ✅ Auto-organize imports with `prettier-plugin-organize-imports`
- ✅ Auto-sort Tailwind classes with `prettier-plugin-tailwindcss`
- ✅ Consistent code formatting

Run `pnpm format` to format all files automatically.

### Layout Components

The application includes sticky TopBar, Header, and Footer components that remain visible while scrolling:

#### TopBar (Sticky Top)

Ticker bar showing live transactions with infinite scroll animation:

```tsx
import { TopBar } from '@/components/layout';

// Features:
// - Height: 28px (h-7)
// - Sticky at top (z-50)
// - Infinite horizontal scroll animation
// - Transaction feed with wallet addresses, actions, and prices
```

#### Header (Sticky Below TopBar)

Main navigation header with logo, menu, and wallet connection:

```tsx
import { Header } from '@/components/layout';

// Features:
// - Height: 68px (h-17)
// - Sticky at top-7 (z-40) - below TopBar
// - Logo on left
// - Centered navigation menu (Trade, List Token, Analysis)
// - Connect Wallet button on right
```

#### Footer (Sticky Bottom)

Bottom bar with live status, trading mode, and social links:

```tsx
import { Footer } from '@/components/layout';

// Features:
// - Height: 40px (h-10)
// - Sticky at bottom (z-40)
// - Live indicator with pulsing green dot
// - Trading mode toggle (Basic/Pro)
// - Copyright text centered
// - Social media links (Twitter, Discord, Telegram)
```

#### AppLayout (Main Wrapper)

Complete layout wrapper including all sticky elements:

```tsx
import { AppLayout } from '@/components/layout';

// Usage in app/layout.tsx
<AppLayout>{children}</AppLayout>;

// Structure:
// - TopBar (sticky top-0)
// - Header (sticky top-7)
// - Main content (flex-1)
// - Footer (sticky bottom-0)
```

**Sticky Behavior:**

- TopBar stays at the very top
- Header stays below TopBar
- Footer stays at the bottom
- Main content scrolls between Header and Footer
- All elements use proper z-index layering (50, 40, 40)

### 1. Button Components

Shadcn/UI Button component with Figma design system integration:

```tsx
import { Button } from '@/components/ui/button';

// Variants
<Button variant="default">Default Button</Button>
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="error">Error Button</Button>
<Button variant="success-outline">Buy</Button>
<Button variant="error-outline">Sell</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With Icons
<Button variant="primary">
  <Icon />
  Create Order
</Button>

// Disabled
<Button disabled>Disabled Button</Button>
```

**Button Variants:**

- `default` - White/light filled button with inverse text (default variant)
- `primary` - Filled button with primary color (#e88144), inverse text
- `secondary` - Outlined button with border
- `ghost` - Transparent button with hover effect
- `success` - Green filled button with inverse text
- `error` - Red filled button with inverse text
- `success-outline` - Subtle green button (15% opacity bg/border, success text)
- `error-outline` - Subtle red button (15% opacity bg/border, error text)

**Button Sizes:**

- `sm` - Small (24px height) - Best for tags and compact UIs
- `md` - Medium (36px height) - Default size for most use cases
- `lg` - Large (48px height) - For prominent CTAs

All buttons use the Figma color system and support dark theme automatically.

### 2. Badge Components

Shadcn/UI Badge component with custom variants:

```tsx
import { Badge } from '@/components/ui/badge';

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>

// With custom className
<Badge variant="success" className="px-4 py-2 text-sm">
  Custom Size
</Badge>

// With icons
<Badge variant="success">
  <CheckIcon className="size-3" />
  Verified
</Badge>
```

**Badge Variants:**

- `default` - White/light badge with inverse text (filled)
- `primary` - Primary color badge with 15% opacity background
- `success` - Green badge with 15% opacity background
- `warning` - Warning badge with 15% opacity background
- `error` - Red badge with 15% opacity background
- `outline` - Outlined badge with border only

**Design Notes:**

- Compact size: `px-1.5 py-0.5` (6px padding)
- Font: Regular weight (400), not bold
- Text size: 12px with 16px line height
- Semantic colors use 15% opacity backgrounds with full color text
- Border radius: 6px (rounded-md)

**Common Use Cases:**

- Order Status: Pending, Processing, Completed, Cancelled
- Trading: Buy, Sell, Market, Limit
- Risk Level: Low, Medium, High
- Verification: Verified, Pending, Rejected

### 3. DayJS Configuration

Pre-configured dayjs with plugins and custom relative time format:

```tsx
import dayjs from 'dayjs';

// Relative time with custom format
dayjs().fromNow(); // "just now", "1m ago", "2h ago", "3d ago"

// Duration
dayjs.duration(1, 'hour').humanize(); // "an hour"

// UTC
dayjs.utc(); // UTC time

// Localized format
dayjs().format('LLL'); // "January 1, 2025 12:00 AM"
```

**Plugins enabled:**

- `localizedFormat` - Format dates with locale-specific formats
- `duration` - Work with time durations
- `relativeTime` - Display relative time (e.g., "2 hours ago")
- `updateLocale` - Customize locale settings
- `utc` - Parse and display in UTC

**Custom relative time format:**

- `just now` instead of "a few seconds ago"
- Short format: `1m`, `2h`, `3d`, `1M`, `1y`

The DayJS provider is automatically initialized in `providers/index.tsx`.

### 4. Tailwind CSS Utilities

Use the `cn()` utility to merge Tailwind classes:

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', condition && 'conditional-class')} />;
```

### 5. Axios Instance

Pre-configured Axios instance with interceptors:

```tsx
import { axiosInstance } from '@/lib/axios';

const response = await axiosInstance.get('/endpoint');
```

Features:

- Automatic JWT token injection
- Global error handling
- Request/response interceptors

### 6. React Query

Example usage:

```tsx
import { useExampleQuery } from '@/hooks/use-example-query';

function MyComponent() {
  const { data, isLoading, error } = useExampleQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data}</div>;
}
```

### 7. Zustand Store

Example store usage:

```tsx
import { useExampleStore } from '@/stores/example-store';

function MyComponent() {
  const { count, increment, decrement } = useExampleStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### 8. Tailwind Scrollbar

Custom scrollbar styling with tailwind-scrollbar plugin:

```tsx
// Default scrollbar
<div className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100">
  {/* content */}
</div>

// Thin scrollbar
<div className="scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
  {/* content */}
</div>

// Hidden scrollbar (still scrollable)
<div className="scrollbar-hide">
  {/* content */}
</div>
```

Available classes:

- `scrollbar` - Default width scrollbar
- `scrollbar-thin` - Thin scrollbar
- `scrollbar-hide` - Hide scrollbar but keep functionality
- `scrollbar-thumb-{color}` - Scrollbar thumb color
- `scrollbar-track-{color}` - Scrollbar track color

See `components/scrollbar-demo.tsx` for more examples.

### 9. Tailwind CSS Animate

Powerful animation utilities with tailwindcss-animate plugin:

```tsx
// Fade in animation
<div className="animate-in fade-in duration-1000">
  Fade in content
</div>

// Slide in from directions
<div className="animate-in slide-in-from-left duration-500">
  Slide from left
</div>

// Zoom in animation
<div className="animate-in zoom-in-50 duration-700">
  Zoom in 50%
</div>

// Combined animations with delay
<div className="animate-in fade-in zoom-in slide-in-from-bottom duration-1000 delay-300">
  Multiple animations
</div>

// Continuous animations
<div className="animate-bounce">Bounce</div>
<div className="animate-pulse">Pulse</div>
<div className="animate-spin">Spin</div>
```

**Available Animation Classes:**

Entry Animations:

- `animate-in` - Base class for entry animations
- `fade-in` / `fade-out` - Fade animations
- `slide-in-from-{direction}` - Slide from top/bottom/left/right
- `zoom-in` / `zoom-out` - Zoom with variants (50, 75, 90, 95, 100, 105, 110, 125, 150)
- `spin-in` / `spin-out` - Rotation animations

Continuous Animations:

- `animate-spin` - Continuous spinning
- `animate-ping` - Ping effect
- `animate-pulse` - Pulsing effect
- `animate-bounce` - Bouncing effect

Modifiers:

- `duration-{ms}` - Animation duration (75, 100, 150, 200, 300, 500, 700, 1000)
- `delay-{ms}` - Animation delay (75, 100, 150, 200, 300, 500, 700, 1000)

See `components/animate-demo.tsx` for more examples.

## Creating New Features

### 1. API Service

Create a new service in `services/`:

```tsx
// services/user-service.ts
import { axiosInstance } from '@/lib/axios';
import type { ApiResponse } from '@/types';

interface User {
  id: string;
  name: string;
  email: string;
}

export const getUsers = async (): Promise<ApiResponse<User[]>> => {
  const response = await axiosInstance.get<ApiResponse<User[]>>('/users');
  return response.data;
};
```

### 2. React Query Hook

Create a hook in `hooks/`:

```tsx
// hooks/use-users.ts
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/services/user-service';
import { QUERY_KEYS } from '@/constants';

export const useUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: getUsers,
  });
};
```

### 3. Zustand Store

Create a store in `stores/`:

```tsx
// stores/user-store.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
```

### 4. TypeScript Types

Add types to `types/index.ts`:

```tsx
export interface User {
  id: string;
  name: string;
  email: string;
}
```

## Learn More

- [NextJS Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [Axios](https://axios-http.com/docs/intro)

## License

MIT
