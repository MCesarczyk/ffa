import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { DogListItem } from './DogListItem';

const meta = {
  component: DogListItem,
  title: 'Components/DogListItem',
  tags: ['autodocs'],
  argTypes: {
    dog: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    dog: {
      id: 'ujfe-op49-3rje-8er8-9iuj',
      name: 'Buddy',
      breed: 'Husky',
      price: 1000,
      image: {
        url: 'https://via.placeholder.com/320',
        fileName: 'Product cover image',
        id: 'ujfe-op49-3rje-8er8-9iuj',
      },
    },
  },
} satisfies Meta<typeof DogListItem>;

export default meta;

type Story = StoryFn<ComponentProps<typeof DogListItem>>;

export const _DogListItem: Story = (args) => (
  <ul className="list-none max-w-sm">
    <DogListItem {...args} />
  </ul>
);
