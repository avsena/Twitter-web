import { Meta, StoryObj } from '@storybook/react'
import { ShortProfile, ShortProfileProps } from "./ShortProfile";

export default {
  title: 'Components/ShortProfile',
  component: ShortProfile,
  args: {
    profilePic: 'src/imgs/profile-pic-1.png'
  }
} as Meta<ShortProfileProps>

export const Default: StoryObj<ShortProfileProps> = {}