import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'green-light',
    children: 'Hello'
  }
};
