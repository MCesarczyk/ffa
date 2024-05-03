import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  component: Footer,
  title: 'Components/Footer',
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const _Footer: Story = {
  args: {},
};
