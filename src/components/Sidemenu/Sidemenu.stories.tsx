import { Meta, StoryObj } from '@storybook/react'
import { Sidemenu, SidemenuProps } from "./Sidemenu";
//import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Components/Sidemenu',
  component: Sidemenu,
  //decorators: [withRouter],
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