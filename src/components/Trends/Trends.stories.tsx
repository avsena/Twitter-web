import { Meta, StoryObj } from '@storybook/react'
import { Trends, TrendsProps } from "./Trends";

export default {
  title: 'Components/Trends',
  component: Trends,
  args: {
    subject: 'Revolution',
    time: 'Last night',
    tweets: '#50.4K Tweets',
    children: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic'
  },
  argTypes: {}
} as Meta<TrendsProps>

export const Default: StoryObj = {}