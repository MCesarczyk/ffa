import type { Meta, StoryFn } from '@storybook/react';
import { ProductListItem } from './ProductListItem';
import { ComponentProps } from 'react';

const meta = {
  component: ProductListItem,
  title: 'Molecules/ProductListItem',
  argTypes: {
    product: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    product: {
      name: 'Product name',
      category: 'Product description',
      price: '$100',
      coverImage: {
        src: 'https://via.placeholder.com/150',
        alt: 'Product cover image',
      },
    },
  },
} satisfies Meta<typeof ProductListItem>;

export default meta;

type Story = StoryFn<ComponentProps<typeof ProductListItem>>;

export const _ProductCoverImage: Story = (args) => (
  <ProductListItem {...args} />
);
