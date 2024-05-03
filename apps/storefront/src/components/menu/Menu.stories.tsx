import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  component: Menu,
  title: 'Components/Menu',
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const _Menu: Story = {
  args: {},
};
