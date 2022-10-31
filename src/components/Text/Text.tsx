import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  asChild?: boolean;
  color?: 'black' | 'white' | 'blue' | 'red' | 'gray';
  className?: string;
}

export function Text({size = 'md', children, asChild, color = 'black', className}: TextProps){
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx(
        `font-sans font-medium ${className}`, {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-2xl': size === 'xl',
        },
        {
          'text-black dark:text-white': color === 'black',
          'text-white': color === 'white',
          'text-blue-1': color === 'blue',
          'text-red': color === 'red',
          'text-dark-5 dark:text-dark-6': color === 'gray',
        }
      )}
    >
      { children }
    </Comp>
  )
}
