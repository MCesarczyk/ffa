import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ProductListItem } from './ProductListItem';

const meta = {
  component: ProductListItem,
  title: 'Components/ProductListItem',
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    product: {
      id: 'ujfe-op49-3rje-8er8-9iuj',
      name: 'Product name',
      category: 'Product description',
      price: 100000,
      image: {
        url: 'https://via.placeholder.com/320',
        fileName: 'Product cover image',
        id: 'ujfe-op49-3rje-8er8-9iuj',
      },
      description: 'Product description',
    },
  },
} satisfies Meta<typeof ProductListItem>;

export default meta;

type Story = StoryFn<ComponentProps<typeof ProductListItem>>;

export const _ProductListItem: Story = (args) => (
  <ul className="list-none max-w-sm">
    <ProductListItem {...args} />
  </ul>
);
