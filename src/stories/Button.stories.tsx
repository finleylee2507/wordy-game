import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

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

// export const Outlined: Story = {
//   args: {
//     variant: 'outlined',
//     text: 'Outlined Button',
//     color: 'red'
//   }
// };
