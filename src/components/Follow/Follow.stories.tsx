import { Meta, StoryObj } from '@storybook/react'
import { Follow, FollowProps } from "./Follow";

export default {
  title: 'Components/Follow',
  component: Follow,
  args: {
    name: 'Bessie Cooper',
    user: '@alessandroveronezi',
    img: 'src/imgs/profile-pic-2.png'
  }
} as Meta<FollowProps>

export const Default: StoryObj = {}