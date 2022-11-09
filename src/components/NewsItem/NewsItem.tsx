import { ReactNode } from "react";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

import './newsItem.css';

export interface NewsItemProps {
  subject: string;
  children: ReactNode;
  img: string;
}

export function NewsItem({ subject, children, img }: NewsItemProps) {
  return (
    <div className="newsItem grid gap-y-1.5 gap-x-4 border-b-2 border-dark-7 dark:border-dark-4 bg-dark-8 dark:bg-dark-2 hover:bg-dark-7 dark:hover:bg-dark-3 py-2.5 px-4 cursor-pointer">
      <Text color="gray" size="sm">{ subject } · { subject }</Text>

      <img src={img} alt={ subject } className="row-span-3 w-[16px] rounded-lg" />

      <Heading size="xs">{ children }</Heading>
      <Text color="gray" size="sm">
      50.4K Tweets
      </Text>
    </div>
  )
}