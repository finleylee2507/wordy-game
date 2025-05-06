import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../../components';

const meta: Meta<typeof NavBar> = {
  title: 'NavBar',
  component: NavBar,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
