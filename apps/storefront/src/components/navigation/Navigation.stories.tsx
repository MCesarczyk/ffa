import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Navigation';

const meta = {
  component: Pagination,
  title: 'Components/Navigation',
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    totalPages: 5,
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const _Menu: Story = {
  args: {},
};
