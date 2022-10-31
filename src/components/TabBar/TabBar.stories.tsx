import { Meta, StoryObj } from '@storybook/react'
import { TabBar, TabBarProps } from "./TabBar";

export default {
  title: 'Components/TabBar',
  component: TabBar,
  args: {
    activeTab: 'tweets'
  }
} as Meta<TabBarProps>

export const Default: StoryObj<TabBarProps> = {
  argTypes: {
    activeTab: {
      table: {
        disable: true,
      }
    }
  }
}