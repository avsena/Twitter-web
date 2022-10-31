import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
    color: 'black'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      }
    },
    color: {
      options: ['black', 'white', 'blue', 'red', 'gray'],
      control: 'inline-radio'
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const ExtraLarge: StoryObj<TextProps> = {
  args: {
    size: 'xl'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}