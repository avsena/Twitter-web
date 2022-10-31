import { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

export default {
  title: 'Components/Spacer',
  component: Spacer,
  args: {
    img: "src/imgs/profile-pic-1.png"
  },
  argType: {},
} as Meta

export const Default: StoryObj = {}