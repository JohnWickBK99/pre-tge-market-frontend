import { Badge } from '@/components/ui/badge';

/**
 * Badge Component Demo
 * Showcases all available badge variants
 */
export function BadgeDemo() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="mb-4 text-xl font-semibold">Badge Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="network">Network</Badge>
          <Badge variant="tba">TBA</Badge>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Usage Examples</h2>
        <div className="space-y-4">
          {/* Token Card Example */}
          <div className="bg-layer-2 relative h-32 w-64 overflow-hidden rounded-2xl">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
              <span className="text-2xl font-semibold text-white">$TOKEN</span>
            </div>
            <Badge variant="network" className="absolute top-2 left-2">
              Ethereum
            </Badge>
            <Badge variant="tba" className="absolute bottom-2 left-2">
              TBA
            </Badge>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error">Failed</Badge>
            <Badge variant="primary">New</Badge>
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">DeFi</Badge>
            <Badge variant="outline">NFT</Badge>
            <Badge variant="outline">Gaming</Badge>
            <Badge variant="outline">Metaverse</Badge>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary" className="text-base">
            Large Badge
          </Badge>
          <Badge variant="success" className="rounded-md">
            Square Corners
          </Badge>
          <Badge variant="error" className="px-4 py-1">
            More Padding
          </Badge>
        </div>
      </div>
    </div>
  );
}
