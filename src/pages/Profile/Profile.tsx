import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";
import { Follow } from "../../components/Follow/Follow";
import { List } from "../../components/List/List";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { Post } from "../../components/Post/Post";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { Spacer } from "../../components/Spacer/Spacer";
import { Text } from "../../components/Text/Text";
import { Tweet, TweetProps } from "../../components/Tweet/Tweet";
import { useFeed } from "../../context/FeedContext/FeedContext";
import { Footer } from "../../components/Footer/Footer";
import { ProfileProps } from "../../components/Profile/Profile";

import './styles.css';

export function Profile() {
  const { tweets, setTweets } = useFeed();

  useEffect(() => {
    setTweets(JSON.parse(String(localStorage.getItem('tweets'))))
  }, [])

  return (
    <div className="profile overflow-y-auto">
      <main className="profile__container flex justify-center bg-white dark:bg-dark-1">
        <div className="profile__left">
          <Sidemenu currentPage="profile" />
        </div>

        <div className="profile__center border-x-2 border-x-dark-7 dark:border-x-dark-4">
          <Header.Root>
            <Header.Text>
              <Heading>
                Home
              </Heading>
            </Header.Text>
            <Header.RightIcon />
          </Header.Root>

          <Post img="src/imgs/profile-pic-1.png" />

          <Spacer />

          {
            tweets?.map((tweet, index) => (
              <Tweet key={index}
                description={tweet.description}
                img={tweet.img || ''}
                name={tweet.name}
                profilePic={tweet.profilePic}
                time={tweet.time}
                user={tweet.user}
              />
            ))
          }

          <Tweet
            name="Devon Lane"
            description="Tom is a big hurry."
            img="src/imgs/Container.png"
            profilePic="src/imgs/profile-pic-4.png"
            time="23s"
            user="@johndoe"
          />

          <Tweet
            name="Darlene Robertson"
            description="Tom is a big hurry."
            img="src/imgs/Placehpolder.png"
            profilePic="src/imgs/profile-pic-5.png"
            time="23s"
            user="@johndoe"
          />

        </div>

        <div className="profile__right">
          <div className="flex flex-col gap-4 justify-start items-start py-2.5 px-7">
            <SearchBar />

            <List title="What's happening">
              <NewsItem
                hashtag="#covid19"
                img="src/imgs/news-item-1.png"
                subject="COVID 19"
                time="Last night"
              >
                England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
              </NewsItem>
              <NewsItem
                hashtag="#trump"
                img="src/imgs/news-item-2.png"
                subject="US news"
                time="4h ago"
              >
                Parler may go offline following suspensions by Amazon, Apple and Google
              </NewsItem>
              <NewsItem
                hashtag="#sport"
                img="src/imgs/news-item-3.png"
                subject="India"
                time="1h ago"
              >
                India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
              </NewsItem>
            </List>

            <List title="Who to follow">
              <Follow
                img="src/imgs/profile-pic-2.png"
                name="Bessie Cooper"
                user="@alessandroveronezi"
              />
              <Follow
                img="src/imgs/profile-pic-3.png"
                name="Jenny Wilson"
                user="@gabrielcantarin"
              />
            </List>

            <Text color="gray">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc.</Text>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}