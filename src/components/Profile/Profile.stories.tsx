import { Meta, StoryObj } from '@storybook/react';
import { Profile, ProfileProps } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
  args: {
    banner: 'src/imgs/feed-1.png',
    profilePic: 'src/imgs/profile-pic-1.png',
    name: 'Davide Biscuso',
    user: '@biscuttu',
    bio: 'Product Designer',
    location: 'London',
    joined: 'September 2011',
    following: 568,
    followers: 72,
  },
  argType: {},
} as Meta<ProfileProps>

export const Default: StoryObj<ProfileProps> = {}