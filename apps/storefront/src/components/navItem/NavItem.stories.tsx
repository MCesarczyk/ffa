import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta = {
  component: NavItem,
  title: 'Components/NavItem',
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof NavItem>;

export const _NavItem: Story = {
  args: {
    url: '/',
    children: 'Lorem ipsum',
  },
};
