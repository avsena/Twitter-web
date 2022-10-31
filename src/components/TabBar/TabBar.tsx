import { Heading } from "../Heading/Heading";
import clsx from "clsx";
import { useState } from "react";

export interface TabBarProps {
  activeTab: 'tweets' | 'replies' | 'media' | 'like' ;
}

export function TabBar({ activeTab = 'tweets' }: TabBarProps){
  const [currentTab, setCurrentTab] = useState<'tweets' | 'replies' | 'media' | 'like'>(activeTab);

  return (
   <div className="tabbar flex">
      <div
        className="w-1/4"
        onClick={() => setCurrentTab('tweets')}
      >
        <Heading
          size="sm"
          color={(currentTab === 'tweets') ? 'blue' : 'gray'}
          className={
            clsx(
              `text-center py-4 hover:bg-dark-7 hover:border-b-2 hover:border-b-dark-7 dark:hover:border-b-bg-dark-4 dark:hover:bg-dark-4 cursor-pointer`, {
              'border-b-2 border-b-blue-1 hover:border-b-blue-1': currentTab === 'tweets'
            }
          )}
        >
          Tweets
        </Heading>
      </div>

      <div
        className="w-1/4"
        onClick={() => setCurrentTab('replies')}
      >
        <Heading
          size="sm"
          color={(currentTab === 'replies') ? 'blue' : 'gray'}
          className={
            clsx(
              `text-center py-4 hover:bg-dark-7 hover:border-b-2 hover:border-b-dark-7 dark:hover:border-b-bg-dark-4 dark:hover:bg-dark-4 cursor-pointer`, {
              'border-b-2 border-b-blue-1 hover:border-b-blue-1': currentTab === 'replies'
            }
          )}
        >
          Tweets & replies
        </Heading>
      </div>

      <div
        className="w-1/4"
        onClick={() => setCurrentTab('media')}
      >
        <Heading
          size="sm"
          color={(currentTab === 'media') ? 'blue' : 'gray'}
          className={
            clsx(
              `text-center py-4 hover:bg-dark-7 hover:border-b-2 hover:border-b-dark-7 dark:hover:border-b-bg-dark-4 dark:hover:bg-dark-4 cursor-pointer`, {
              'border-b-2 border-b-blue-1 hover:border-b-blue-1': currentTab === 'media'
            }
          )}
        >
          Media
        </Heading>
      </div>

      <div
        className="w-1/4"
        onClick={() => setCurrentTab('like')}
      >
        <Heading
          size="sm"
          color={(currentTab === 'like') ? 'blue' : 'gray'}
          className={
            clsx(
              `text-center py-4 hover:bg-dark-7 hover:border-b-2 hover:border-b-dark-7 dark:hover:border-b-bg-dark-4 dark:hover:bg-dark-4 cursor-pointer`, {
              'border-b-2 border-b-blue-1 hover:border-b-blue-1': currentTab === 'like'
            }
          )}
        >
          Likes
        </Heading>
      </div>
   </div>
  )
}
