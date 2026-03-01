import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus, Download, Trash2, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@cosmos/components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button component with 5 variants, 2 sizes, icon support, loading state, and disabled state. Uses TailAdmin class patterns with cosmos brand colors.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Variants ──────────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button Text' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Button Text' },
};

export const Error: Story = {
  args: { variant: 'error', children: 'Delete' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Warning' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Confirm' },
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const SmallSize: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small Button' },
};

export const MediumSize: Story = {
  args: { variant: 'primary', size: 'md', children: 'Medium Button' },
};

// ── With Icons ────────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: { variant: 'primary', icon: Plus, iconPosition: 'left', children: 'Add Item' },
};

export const WithTrailingIcon: Story = {
  args: { variant: 'primary', icon: ArrowRight, iconPosition: 'right', children: 'Continue' },
};

export const SecondaryWithIcon: Story = {
  args: { variant: 'secondary', icon: Download, iconPosition: 'left', children: 'Download' },
};

export const ErrorWithIcon: Story = {
  args: { variant: 'error', icon: Trash2, iconPosition: 'left', children: 'Delete' },
};

// ── States ────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Loading...' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
};

// ── All variants together ─────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'Both Sizes',
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
    </div>
  ),
};
