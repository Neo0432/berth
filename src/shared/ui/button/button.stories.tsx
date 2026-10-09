import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Apply',
    variant: 'primary',
    size: 'm',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['m', 's'] },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Outline: Story = { args: { variant: 'outline' } };

export const Loading: Story = { args: { isLoading: true } };

export const Disabled: Story = { args: { disabled: true } };

export const AsLink: Story = {
  args: { as: 'a', href: 'https://example.com', children: 'Open repository' },
};
