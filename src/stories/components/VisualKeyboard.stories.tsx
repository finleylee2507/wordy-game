import { Meta, StoryObj } from '@storybook/react';
import { VisualKeyboard } from '../../components';

const meta: Meta<typeof VisualKeyboard> = {
  title: 'VisualKeyboard',
  component: VisualKeyboard,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VisualKeyboard>;

export const Default: Story = {};
