import { Meta, StoryObj } from '@storybook/react'
import { Navlink, NavlinkProps } from './Navlink';

export default {
  title: 'Components/Navlink',
  component: Navlink,
  args: {
    icon: 'home',
    iconFill: 'home-fill',
    children: 'Home'
  }
} as Meta<NavlinkProps>

export const Default: StoryObj<NavlinkProps> = {
  args: {
    active: false
  },
  argTypes: {
    active: {
      table: {
        disable: true
      }
    }
  }
}

export const Active: StoryObj<NavlinkProps> = {
  args: {
    active: true
  },
  argTypes: {
    active: {
      table: {
        disable: true
      }
    }
  }
}