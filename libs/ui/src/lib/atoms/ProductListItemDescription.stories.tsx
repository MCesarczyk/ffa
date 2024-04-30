import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ProductListItemDescription } from './ProductListItemDescription';

const meta = {
  component: ProductListItemDescription,
  title: 'Atoms/ProductListItemDescription',
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
    },
  },
} satisfies Meta<typeof ProductListItemDescription>;

export default meta;

type Story = StoryFn<ComponentProps<typeof ProductListItemDescription>>;

export const _ProductCoverImage: Story = (args) => (
  <ProductListItemDescription {...args} />
);
