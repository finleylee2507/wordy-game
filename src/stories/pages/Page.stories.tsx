import { Meta, StoryObj } from '@storybook/react';
import { Game } from '../../pages';

const meta: Meta<typeof Game> = {
  title: 'Game',
  component: Game,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Game>;

export const Default: Story = {};
