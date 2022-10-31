import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TweetProps } from '../../components/Tweet/Tweet';

interface FeedContextProps {
  tweets: TweetProps[];
  setTweets: React.Dispatch<React.SetStateAction<TweetProps[]>>;
}

interface FeedContextProviderProps {
  children: ReactNode;
}

const FeedContext = createContext<FeedContextProps>({
  tweets: JSON.parse(String(localStorage.getItem("tweets"))),
  setTweets: () => {}
});

export function FeedContextProvider({ children }: FeedContextProviderProps) {
  const [tweets, setTweets] = useState<Array <TweetProps>>(JSON.parse(String(localStorage.getItem("tweets"))));

  useEffect(() => {
    setTweets(JSON.parse(String(localStorage.getItem("tweets"))))
  }, []);

  return (
    <FeedContext.Provider
      value={{
        tweets,
        setTweets
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed() {
  const context = useContext(FeedContext);
  const { tweets, setTweets } = context;
  return { tweets, setTweets };
}