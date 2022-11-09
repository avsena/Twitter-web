import { Meta, StoryObj } from '@storybook/react';
import { Post, PostProps } from './Post';

export default {
  title: 'Components/Post',
  component: Post,
  args: {
    img: "src/imgs/bobur.png"
  },
  argType: {},
} as Meta<PostProps>

export const Default: StoryObj<PostProps> = {}