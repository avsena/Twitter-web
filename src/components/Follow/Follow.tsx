import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

import './follow.css';

export interface FollowProps {
  name: string;
  user: string;
  img: string;
}

export function Follow({ name, user, img }: FollowProps) {
  return (
    <div className="follow grid gap-x-2.5 border-b-2 border-dark-7 dark:border-dark-4 bg-dark-8 dark:bg-dark-2 hover:bg-dark-7 dark:hover:bg-dark-3 py-2.5 px-4 cursor-pointer">
      <img src={ img } alt={ name } className="follow__profile w-12 rounded-full" />

      <div className="follow__text flex flex-col justify-center">
        <Heading size="sm" className="leading-5">{ name }</Heading>
        <Text color="gray" size="lg" className="leading-5">{ user }</Text>
      </div>

      <Button color="blue" style="outline" className="follow__button justify-self-end self-center max-w-[200px]">Follow</Button>
    </div>
  )
}