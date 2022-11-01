import { Meta, StoryObj } from '@storybook/react'
import { Footer } from "./Footer";

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    children: 'Footer',
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
    },
    color: {
      options: ['blue', 'white'],
    }
  }
} as Meta

export const Default: StoryObj = {}