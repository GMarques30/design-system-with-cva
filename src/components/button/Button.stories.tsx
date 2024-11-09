import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>;

export const DefaultButton: StoryObj<ButtonProps> = {
  args: {
    as: 'button',
  },
};

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    size: 'icon',
    children: (
      <svg width="16" height="16">
        <circle cx="8" cy="8" r="8" fill="currentColor" />
      </svg>
    ),
  },
};
