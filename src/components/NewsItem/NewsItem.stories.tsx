import { Meta, StoryObj } from '@storybook/react'
import { NewsItem, NewsItemProps } from "./NewsItem";

export default {
  title: 'Components/NewsItem',
  component: NewsItem,
  args: {
    subject: 'COVID 19',
    time: 'Last night',
    hashtag: '#covid19',
    children: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
    img: 'src/imgs/news-item-1.png'
  },
  argTypes: {}
} as Meta<NewsItemProps>

export const Default: StoryObj = {}