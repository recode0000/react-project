/* eslint-disable storybook/story-exports */

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Common/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>

export const HelloButton: Story = {
  render: () => <Button>Hello World</Button>,
};

export const ClickButton: Story = {
  render: () => <Button>Click</Button>,
};