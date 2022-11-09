import { Meta, StoryObj } from '@storybook/react';
import { Profile, ProfileProps } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,

  args: {
    banner: 'src/imgs/banner1.png',
    profilePic: 'src/imgs/bobur.png',
    name: 'Bobur',
    user: '@bobur_mavlonov',
    bio: '',
    location: 'Mashag´daman',
    linked: 't.me/boburjon_mavlonov',
    born: 'November 24, 2020',
    joined: 'May 2020',
    following: 47,
    followers: 67,
  },
  argType: {},
} as Meta<ProfileProps>

export const Default: StoryObj<ProfileProps> = {}