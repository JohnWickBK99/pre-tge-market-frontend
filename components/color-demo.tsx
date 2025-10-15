/**
 * Color Demo Component
 * Displays the color palette from Figma design system
 */

export function ColorDemo() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-text-primary text-3xl font-bold">
        Color Palette from Figma
      </h2>

      {/* Text Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">Text Colors</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <ColorCard
            name="Primary"
            color="text-primary"
            hex="#fefefc"
            className="bg-text-primary"
          />
          <ColorCard
            name="Secondary"
            color="text-secondary"
            hex="#898b8d"
            className="bg-text-secondary"
          />
          <ColorCard
            name="Tertiary"
            color="text-tertiary"
            hex="#7e8180"
            className="bg-text-tertiary"
          />
          <ColorCard
            name="Inverse"
            color="text-inverse"
            hex="#000000"
            className="bg-text-inverse"
          />
          <ColorCard
            name="Focus"
            color="text-focus"
            hex="#e88144"
            className="bg-text-focus"
          />
        </div>
      </div>

      {/* Layer/Background Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">
          Layer Colors
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <ColorCard
            name="Layer 1"
            color="layer-1"
            hex="#000000"
            className="bg-layer-1"
          />
          <ColorCard
            name="Layer 2"
            color="layer-2"
            hex="#141414"
            className="bg-layer-2"
          />
          <ColorCard
            name="Layer Focus"
            color="layer-focus"
            hex="#fefefc"
            className="bg-layer-focus"
          />
        </div>
      </div>

      {/* Icon Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">Icon Colors</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ColorCard
            name="Primary"
            color="icon-primary"
            hex="#fefefc"
            className="bg-icon-primary"
          />
          <ColorCard
            name="Secondary"
            color="icon-secondary"
            hex="#898b8d"
            className="bg-icon-secondary"
          />
          <ColorCard
            name="Tertiary"
            color="icon-tertiary"
            hex="#7e8180"
            className="bg-icon-tertiary"
          />
          <ColorCard
            name="Inverse"
            color="icon-inverse"
            hex="#000000"
            className="bg-icon-inverse"
          />
        </div>
      </div>

      {/* Border Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">
          Border Colors
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <ColorCard
            name="Default"
            color="border-default"
            hex="#27292b"
            className="bg-border-default"
          />
        </div>
      </div>

      {/* Button Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">
          Button Colors
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <ColorCard
            name="Primary"
            color="button-primary"
            hex="#e88144"
            className="bg-button-primary"
          />
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">
          Semantic Colors
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <ColorCard
            name="Success"
            color="success"
            hex="#63eb97"
            className="bg-success"
          />
          <ColorCard
            name="Error"
            color="error"
            hex="#ef6663"
            className="bg-error"
          />
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">
          Usage Examples
        </h3>
        <div className="border-border-default bg-layer-2 space-y-4 rounded-lg border p-6">
          <p className="text-text-primary">
            This is primary text with{' '}
            <span className="text-text-focus">focus color</span> and{' '}
            <span className="text-text-secondary">secondary color</span>.
          </p>
          <button className="bg-button-primary text-text-primary rounded-lg px-6 py-3 transition-colors hover:opacity-90">
            Primary Button
          </button>
          <div className="flex gap-4">
            <div className="bg-success text-text-inverse rounded-lg px-4 py-2">
              Success Message
            </div>
            <div className="bg-error text-text-primary rounded-lg px-4 py-2">
              Error Message
            </div>
          </div>
        </div>
      </div>

      {/* CSS Variables Info */}
      <div className="space-y-4">
        <h3 className="text-text-primary text-xl font-semibold">How to Use</h3>
        <div className="border-border-default bg-layer-2 space-y-2 rounded-lg border p-6">
          <code className="text-text-secondary block text-sm">
            {`// Text color`}
            <br />
            {`className="text-text-primary"`}
            <br />
            <br />
            {`// Background color`}
            <br />
            {`className="bg-layer-2"`}
            <br />
            <br />
            {`// Border color`}
            <br />
            {`className="border-border-default"`}
            <br />
            <br />
            {`// Button with hover`}
            <br />
            {`className="bg-button-primary hover:opacity-90"`}
          </code>
        </div>
      </div>
    </div>
  );
}

interface ColorCardProps {
  name: string;
  color: string;
  hex: string;
  className: string;
}

function ColorCard({ name, color, hex, className }: ColorCardProps) {
  return (
    <div className="border-border-default bg-layer-2 overflow-hidden rounded-lg border">
      <div className={`h-24 w-full ${className}`}></div>
      <div className="space-y-1 p-4">
        <p className="text-text-primary font-semibold">{name}</p>
        <p className="text-text-secondary text-sm">{color}</p>
        <p className="text-text-tertiary font-mono text-xs">{hex}</p>
      </div>
    </div>
  );
}
