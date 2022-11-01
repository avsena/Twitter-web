import { Meta, StoryObj } from '@storybook/react'
import { ShortProfile, ShortProfileProps } from "./ShortProfile";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Components/ShortProfile',
  component: ShortProfile,
  decorators: [withRouter],
  args: {
    profilePic: 'src/imgs/profile-pic-1.png'
  }
} as Meta<ShortProfileProps>

export const Default: StoryObj<ShortProfileProps> = {}