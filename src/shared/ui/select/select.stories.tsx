import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Select } from './select';

const ROLE_OPTIONS = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
  { label: 'QA', value: 'qa' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Other', value: 'other', isDisabled: true },
];

const meta = {
  title: 'Shared/Select',
  component: Select,
  args: {
    label: 'Main role',
    placeholder: 'Choose a role…',
    options: ROLE_OPTIONS,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, minHeight: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = { args: { menuIsOpen: true, defaultValue: ROLE_OPTIONS[0] } };

export const Filled: Story = { args: { defaultValue: ROLE_OPTIONS[0] } };

export const WithError: Story = {
  args: { defaultValue: ROLE_OPTIONS[0], errorText: 'Choose your main role to continue.' },
};

export const Disabled: Story = { args: { isDisabled: true } };

export const Required: Story = { args: { isRequired: true } };

export const WithHintAndCounter: Story = {
  args: { notifyBefore: 'Shown on your profile and in applications.', notifyAfter: '1 / 1' },
};

export const Searchable: Story = { args: { isSearchable: true, isClearable: true } };

export const Loading: Story = { args: { isLoading: true } };

export const Multi: Story = {
  args: { isMulti: true, defaultValue: [ROLE_OPTIONS[0], ROLE_OPTIONS[2]], closeMenuOnSelect: false },
};
