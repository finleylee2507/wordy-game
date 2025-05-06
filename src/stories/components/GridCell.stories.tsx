import { Meta, StoryObj } from '@storybook/react';
import { GridCell } from '../../components';

const meta: Meta<typeof GridCell> = {
  title: 'GridCell',
  component: GridCell,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['correct', 'incorrect', 'unstyled', 'unfilled']
    }
  }
};

export default meta;

type Story = StoryObj<typeof GridCell>;

export const Correct: Story = {
  args: {
    letter: 'W',
    status: 'correct',
    fontSize: 16
  }
};
