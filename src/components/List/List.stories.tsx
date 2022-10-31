import { Meta, StoryObj } from '@storybook/react'
import { Follow } from '../Follow/Follow';
import { NewsItem } from '../NewsItem/NewsItem';
import { List, ListProps } from "./List";

export default {
  title: 'Components/List',
  component: List
} as Meta

export const FollowList: StoryObj = {
  args: {
    title: 'Who to follow',
    children: [
      <Follow name='Bessie Cooper' user='@alessandroveronezi' img='src/imgs/profile-pic-2.png' />,
      <Follow name='Jenny Wilson' user='@gabrielcantarin' img='src/imgs/profile-pic-3.png' />
    ]
  }
}

export const NewsList: StoryObj = {
  args: {
    title: "What's happening",
    children: [
      <NewsItem
        subject='COVID 19'
        time='Last night'
        hashtag='#covid19'
        img='src/imgs/news-item-1.png'
      >
        England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
      </NewsItem>,

      <NewsItem
        subject='US news'
        time='4h ago'
        hashtag='#trump'
        img='src/imgs/news-item-2.png'
      >
        Parler may go offline following suspensions by Amazon, Apple and Google
      </NewsItem>,

      <NewsItem
        subject='India'
        time='1h ago'
        hashtag='#sport'
        img='src/imgs/news-item-3.png'
      >
        India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
      </NewsItem>
    ]
  }
}