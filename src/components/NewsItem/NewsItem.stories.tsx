import { Meta, StoryObj } from '@storybook/react'
import { NewsItem, NewsItemProps } from "./NewsItem";

export default {
  title: 'Components/NewsItem',
  component: NewsItem,
  args: {
    subject: 'Trending in Germany',
    children: '',
    img: 'src/imgs/news-item-1.png'
  },
  argTypes: {}
} as Meta<NewsItemProps>

export const Default: StoryObj = {}