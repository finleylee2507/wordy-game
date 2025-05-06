import { Meta, StoryObj } from '@storybook/react';
import { InstructionsDialog } from '../../components';

const meta: Meta<typeof InstructionsDialog> = {
  title: 'InstructionsDialog',
  component: InstructionsDialog,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof InstructionsDialog>;

export const Default: Story = {
  args: {
    isOpen: true,
    onDismiss: () => {}
  }
};
