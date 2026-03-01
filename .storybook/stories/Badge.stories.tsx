import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@cosmos/components/ui/Badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Small inline label with 5 color variants and 3 styles (light, solid, outline). Used for status indicators, categories, and counts.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'error', 'gray'],
    },
    style: {
      control: 'select',
      options: ['light', 'solid', 'outline'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Single variants ───────────────────────────────────────────────────────────

export const BrandLight: Story = {
  args: { variant: 'brand', style: 'light', children: 'New' },
};

export const SuccessLight: Story = {
  args: { variant: 'success', style: 'light', children: 'Active' },
};

export const WarningLight: Story = {
  args: { variant: 'warning', style: 'light', children: 'Pending' },
};

export const ErrorLight: Story = {
  args: { variant: 'error', style: 'light', children: 'Failed' },
};

export const Solid: Story = {
  args: { variant: 'brand', style: 'solid', children: 'Solid' },
};

export const Outline: Story = {
  args: { variant: 'brand', style: 'outline', children: 'Outline' },
};

// ── All variants ──────────────────────────────────────────────────────────────

export const AllLight: Story = {
  name: 'All — Light Style',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="brand" style="light">Brand</Badge>
      <Badge variant="success" style="light">Success</Badge>
      <Badge variant="warning" style="light">Warning</Badge>
      <Badge variant="error" style="light">Error</Badge>
      <Badge variant="gray" style="light">Default</Badge>
    </div>
  ),
};

export const AllSolid: Story = {
  name: 'All — Solid Style',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="brand" style="solid">Brand</Badge>
      <Badge variant="success" style="solid">Success</Badge>
      <Badge variant="warning" style="solid">Warning</Badge>
      <Badge variant="error" style="solid">Error</Badge>
      <Badge variant="gray" style="solid">Default</Badge>
    </div>
  ),
};

export const AllOutline: Story = {
  name: 'All — Outline Style',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="brand" style="outline">Brand</Badge>
      <Badge variant="success" style="outline">Success</Badge>
      <Badge variant="warning" style="outline">Warning</Badge>
      <Badge variant="error" style="outline">Error</Badge>
      <Badge variant="gray" style="outline">Default</Badge>
    </div>
  ),
};
