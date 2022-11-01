import { Meta, StoryObj } from '@storybook/react';
import { Profile, ProfileProps } from './Profile';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Profile',
  component: Profile,
  decorators: [withRouter],
  args: {
    banner: 'src/imgs/banner.png',
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