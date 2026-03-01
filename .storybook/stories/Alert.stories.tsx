import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '@cosmos/components/ui/Alert';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert banner with 4 variants (info, success, warning, error), optional title, dismissible prop, and onDismiss callback.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This action cannot be undone. Please review before continuing.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true,
    children: 'Click the × to dismiss this alert.',
  },
};

export const NoTitle: Story = {
  name: 'Without Title',
  args: {
    variant: 'success',
    children: 'Alert without a title — just the message.',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="space-y-3">
      <Alert variant="info" title="Info">An informational message.</Alert>
      <Alert variant="success" title="Success">Operation completed successfully.</Alert>
      <Alert variant="warning" title="Warning">Please review before continuing.</Alert>
      <Alert variant="error" title="Error">Something went wrong.</Alert>
    </div>
  ),
};
