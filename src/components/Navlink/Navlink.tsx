import { ReactNode } from "react";
import { IconProps } from "../../icons/interface";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";

export interface NavlinkProps {
  icon: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  iconFill: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  children: ReactNode;
  active: Boolean;
  page: string;
}

export function Navlink({ icon, iconFill, children, active, page }: NavlinkProps) {
  return (
    <span>
      <a href={page} className="inline-flex gap-x-5 focus:bg-dark-7 /30 rounded-full p-2.5 pr-7">
        <Icon icon={ active ? iconFill : icon } color={ active ? 'black' : 'black' } />
        <Heading color={ active ? 'black' : 'black' }>{ children }</Heading>
      </a>
    </span>
  )
}