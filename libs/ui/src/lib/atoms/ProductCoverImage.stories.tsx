import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ProductCoverImage } from './ProductCoverImage';

const meta = {
  component: ProductCoverImage,
  title: 'Atoms/ProductCoverImage',
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
    src: 'https://via.placeholder.com/150',
    alt: 'Product cover image',
  },
} satisfies Meta<typeof ProductCoverImage>;

export default meta;

type Story = StoryFn<ComponentProps<typeof ProductCoverImage>>;

export const _ProductCoverImage: Story = (args) => (
  <ProductCoverImage {...args} />
);
