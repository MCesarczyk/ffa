import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CoverImage } from './CoverImage';

const meta = {
  component: CoverImage,
  title: 'Components/CoverImage',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://via.placeholder.com/320',
    alt: 'Product cover image',
  },
} satisfies Meta<typeof CoverImage>;

export default meta;

type Story = StoryFn<ComponentProps<typeof CoverImage>>;

export const _ProductListItem: Story = (args) => (
  <ul className="list-none max-w-sm">
    <CoverImage {...args} />
  </ul>
);
