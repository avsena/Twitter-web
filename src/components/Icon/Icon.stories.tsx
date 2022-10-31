import { Meta, StoryObj } from '@storybook/react'
import { Icon, IconSettings } from "./Icon";

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    color: 'blue',
    icon: 'logo'
  },
  argTypes: {
    color: {
      options: ['black', 'blue', 'red', 'gray'],
      control: 'inline-radio'
    },
    icon: {
      options: ['back', 'bookmark', 'bookmark-fill', 'calendar', 'comment', 'ellipses', 'emoji', 'explore', 'explore-fill', 'gif', 'home', 'home-fill', 'like', 'like-fill', 'lists', 'lists-fill', 'location', 'logo', 'media', 'message', 'message-fill', 'more', 'notification', 'notification-fill', 'poll', 'profile', 'profile-fill', 'retweet', 'schedule', 'share', 'top-tweet'],
      control: 'select'
    }
  }
} as Meta<IconSettings>

export const Default: StoryObj = {}