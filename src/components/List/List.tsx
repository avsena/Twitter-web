import { ReactNode } from "react";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

export interface ListProps {
  title: string;
  children: ReactNode;
}

export function List({ title, children }: ListProps) {
  return (
    <div className="news bg-dark-8 rounded-lg dark:bg-dark-2 dark:border-dark-4">
      <Heading size="lg" className="border-b-2 border-dark-7 dark:border-dark-4 py-2.5 px-4">{ title }</Heading>

      { children }

      <Text color="blue" className="rounded-b-lg block p-4 hover:underline hover:bg-dark-7 dark:hover:bg-dark-3 cursor-pointer">Show more</Text>
    </div>
  )
}