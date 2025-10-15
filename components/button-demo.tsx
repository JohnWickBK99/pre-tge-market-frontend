'use client';

import { Button } from '@/components/ui/button';

export function ButtonDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Button Components</h2>
        <p className="text-text-secondary text-sm">
          Button variants synced from Figma design system with full color token
          support.
        </p>
      </div>

      {/* Variants Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Default Button</Button>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="error">Error Button</Button>
          <Button variant="success-outline">Success Outline</Button>
          <Button variant="error-outline">Error Outline</Button>
        </div>
      </div>

      {/* Sizes Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>

      {/* With Icons Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Order
          </Button>
          <Button variant="secondary">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Document
          </Button>
          <Button variant="success" size="sm">
            Layer 1
          </Button>
        </div>
      </div>

      {/* States Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button className="hover:opacity-90">Hover (hover me)</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      {/* All Combinations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          All Size × Variant Combinations
        </h3>
        <div className="space-y-6">
          {/* Primary */}
          <div className="space-y-2">
            <p className="text-text-secondary text-sm font-medium">Primary</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Secondary */}
          <div className="space-y-2">
            <p className="text-text-secondary text-sm font-medium">Secondary</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="md">
                Medium
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Ghost */}
          <div className="space-y-2">
            <p className="text-text-secondary text-sm font-medium">Ghost</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="sm">
                Small
              </Button>
              <Button variant="ghost" size="md">
                Medium
              </Button>
              <Button variant="ghost" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Success */}
          <div className="space-y-2">
            <p className="text-text-secondary text-sm font-medium">Success</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="success" size="sm">
                Small
              </Button>
              <Button variant="success" size="md">
                Medium
              </Button>
              <Button variant="success" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Error */}
          <div className="space-y-2">
            <p className="text-text-secondary text-sm font-medium">Error</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="error" size="sm">
                Small
              </Button>
              <Button variant="error" size="md">
                Medium
              </Button>
              <Button variant="error" size="lg">
                Large
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Code */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Usage</h3>
        <div className="bg-layer-2 rounded-lg p-4">
          <pre className="text-text-secondary overflow-x-auto text-xs">
            {`import { Button } from '@/components/ui/button';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="success">Success</Button>
<Button variant="error">Error</Button>

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
<Button disabled>Disabled</Button>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
