import { Meta, StoryObj } from '@storybook/react'
import { ShortProfile, ShortProfileProps } from "./ShortProfile";

export default {
  title: 'Components/ShortProfile',
  component: ShortProfile,

  args: {
    profilePic: 'src/imgs/bobur.png'
  }
} as Meta<ShortProfileProps>

export const Default: StoryObj<ShortProfileProps> = {}