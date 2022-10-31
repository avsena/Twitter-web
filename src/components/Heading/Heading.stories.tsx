import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
    color: 'black'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio'
      }
    },
    color: {
      options: ['black', 'white', 'blue'],
      control: 'inline-radio'
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const ExtraSmall: StoryObj<HeadingProps> = {
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

export const Small: StoryObj<HeadingProps> = {
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

export const Large: StoryObj<HeadingProps> = {
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

export const ExtraLarge: StoryObj<HeadingProps> = {
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

export const Big: StoryObj<HeadingProps> = {
  args: {
    size: '2xl'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <p>Heading with H1 tag</p>
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