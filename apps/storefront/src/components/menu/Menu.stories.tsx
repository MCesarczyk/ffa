import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  component: Menu,
  title: 'Components/Menu',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The children of the component',
      table: {
        category: 'content',
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const Bare: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: <p className="text-white font-bold mx-2">children?: ReactNode</p>,
  },
};
