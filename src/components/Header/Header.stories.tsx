import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { Header, HeaderRootProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header.Root,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<HeaderRootProps>

export const Home: StoryObj<HeaderRootProps> = {
  args: {
    children: [
      <Header.Text>
        <Heading>Home</Heading>
      </Header.Text>,
      <Header.RightIcon></Header.RightIcon>
    ]
  }
}

export const Profile: StoryObj<HeaderRootProps> = {
  args: {
    children: [
      <Header.LeftIcon></Header.LeftIcon>,
      <Header.Text>
        <Heading className='leading-5'>Name</Heading>
        <Text color='gray' size='xs'>9 Tweets</Text>
      </Header.Text>
    ]
  }
}