import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'default',
    style: 'fill',
    color: 'blue'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'big', 'default'],
      control: {
        type: 'inline-radio'
      }
    },
    style: {
      options: ['fill', 'outline'],
      control: 'inline-radio'
    },
    color: {
      options: ['blue', 'white'],
      control: 'inline-radio'
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    style: 'outline'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium'
  }
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}