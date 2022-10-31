import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from "./Tweet";

export default {
  title: 'Components/Tweet',
  component: Tweet,
  args: {
    name: 'Devon Lane',
    user: '@johndoe',
    time: '23s',
    description: 'Tom is a big hurry.',
    img: 'src/imgs/feed-1.png',
    profilePic: 'src/imgs/profile-pic-4.png'
  }
} as Meta<TweetProps>

export const Default: StoryObj<TweetProps> = {}