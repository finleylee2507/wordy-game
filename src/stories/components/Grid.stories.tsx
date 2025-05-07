import { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../components';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
