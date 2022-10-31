import { Meta, StoryObj } from '@storybook/react'
import { Sidemenu, SidemenuProps } from "./Sidemenu";

export default {
  title: 'Components/Sidemenu',
  component: Sidemenu,
  args: {
    currentPage: 'home',
  },
  argTypes: {
    currentPage: {
      options: ['home', 'explore', 'notifications', 'messages', 'bookmarks', 'lists', 'profile', 'more'],
      control: 'inline-radio'
    }
  }
} as Meta<SidemenuProps>

export const Default: StoryObj = {}