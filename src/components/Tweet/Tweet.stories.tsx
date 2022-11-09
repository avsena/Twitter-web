import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from "./Tweet";

export default {
  title: 'Components/Tweet',
  component: Tweet,
  args: {
    name: 'Bobur',
    user: '@bobur_mavlonov',
    time: 'Now',
    description: 'Tom is a big hurry.',
    img: 'src/imgs/Container.png',
    profilePic: 'src/imgs/bobur.png'
  }
} as Meta<TweetProps>

export const Default: StoryObj<TweetProps> = {}