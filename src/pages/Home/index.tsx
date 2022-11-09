import { useEffect, useState } from "react";
import { Follow } from "../../components/Follow/Follow";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";
import { List } from "../../components/List/List";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { Post } from "../../components/Post/Post";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { Spacer } from "../../components/Spacer/Spacer";
import { Text } from "../../components/Text/Text";
import { Tweet, TweetProps } from "../../components/Tweet/Tweet";
import { useFeed } from "../../context/FeedContext/FeedContext";

import './styles.css';

export function Home() {
  const { tweets, setTweets } = useFeed();

  useEffect(() => {
    setTweets(JSON.parse(String(localStorage.getItem('tweets'))))
  }, [])

  return (
    <div className="page overflow-y-auto">
      <main className="page__container flex justify-center bg-white dark:bg-dark-1">
        <div className="page__left">
          <Sidemenu currentPage="home" />
        </div>

        <div className="page__center border-x-2 border-x-dark-7 dark:border-x-dark-4">
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
            name="Designsta"
            description="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
            profilePic="src/imgs/designsta.png"
            time="25m"
            user="@inner"
          />

          <Tweet
            name="cloutexhibition"
            description="YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
            profilePic="src/imgs/cloutexhibition.png"
            time="22m"
            user="@RajLahoti"
          />

          <Tweet
            name="CreativePhoto"
            description="Обетда.....Кечиринглар"
            img="src/imgs/post1.png"
            profilePic="src/imgs/CreativePhoto.png"
            time="1h"
            user="@cloutexhibition"
          />

        </div>

        <div className="page__right">
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
                time="23h ago"
              >
                India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
              </NewsItem>
            </List>

            <List title="You might like">
              <Follow
                img="src/imgs/profile-pic-7-mushtariy.png"
                name="Mushtariy"
                user="@Mushtar565266"
              />
              <Follow
                img="src/imgs/profile-pic-6-Shuhratbek.png"
                name="Shuhratbek"
                user="@mrshukhrat"
              />
            </List>

            <Text color="gray">Terms of Service Privacy Policy Cookie Policy</Text>
            <Text color="gray">Imprint Ads Info More... © 2021 Twitter, Inc.</Text>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}