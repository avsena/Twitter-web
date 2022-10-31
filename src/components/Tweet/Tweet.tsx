import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import { useState } from "react";

export interface TweetProps {
  name: string;
  user: string;
  time: string;
  profilePic: string;
  description: string;
  img?: string;
}

export function Tweet({ name, user, time, profilePic, description, img }: TweetProps) {
  const [ wasLiked, setWasLiked ] = useState(false);
  return (
    <div className="tweet flex items-start gap-2.5 pl-4 py-2.5 border-t-2 border-dark-7 dark:border-dark-4">
      <img src={ profilePic } alt={ name } className="w-12 rounded-full" />

      <div className="feed__content pr-3 w-full">
        <div className="feed__header flex gap-1 items-center mb-1">
          <Heading size="xs">{ name }</Heading>
          <Text color="gray">{ user }</Text>
          <Text color="gray">·</Text>
          <Text color="gray">{ time }</Text>
        </div>

        <Text className="mb-2.5" asChild>
          <p>{ description }</p>
        </Text>

        {
          img && <img src={ img } alt={ description } className="w-full border-2 border-dark-7 dark:border-dark-4 rounded-2xl aspect-video object-cover" />
        }

        <div className="feed__actions flex my-4">
          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="comment" color="gray" />
              <Text size="xs" color="gray">61</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="retweet" color="gray" />
              <Text size="xs" color="gray">12</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5"  onClick={() => setWasLiked(!wasLiked)}>
              <Icon size="1.125rem" icon={ wasLiked ? 'like-fill' : 'like' } color={ wasLiked ? 'red' : 'gray' } />
              <Text size="xs" color={ wasLiked ? 'red' : 'gray' }>6.2k</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="share" color="gray" />
              <Text size="xs" color="gray">61</Text>
            </div>
          </div>
        </div>

        <Text color="blue" className="hover:underline cursor-pointer">Show this thread</Text>
      </div>
    </div>

  )
}