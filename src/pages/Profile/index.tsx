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
//o import do Profile está dando erro
import { Profile as ProfileComponent } from '../../components/Profile/Profile';

import './styles.css';

export function Profile() {
  const { tweets, setTweets } = useFeed();

  useEffect(() => {
    setTweets(JSON.parse(String(localStorage.getItem('tweets'))))
  }, [])

  return (
    <div className="page overflow-y-auto">
      <main className="page__container flex justify-center bg-white dark:bg-dark-1">
        <div className="page__left">
          <Sidemenu currentPage="profile" />
        </div>

        <div className="page__center border-x-2 border-x-dark-7 dark:border-x-dark-4">
          <Header.Root>
            <Header.LeftIcon />
            <Header.Text>
              <Header.Text>
                <Heading>
                  <strong>Bobur</strong>
                </Heading>
                1,070 Tweets
              </Header.Text>
            </Header.Text>
            <Header.RightIcon />
          </Header.Root>

          <ProfileComponent
            banner="src\imgs\banner1.png"
            profilePic="src/imgs/bobur.png"
            name="Bobur"
            user="@bobur_mavlonov"
            bio="UX&UI designer at "
            location="Mashag´daman"
            linked="t.me/boburjon_mavlonov"
            born="November 24, 2000"
            joined="May 2020"
            following={67}
            followers= {47} />

          <Spacer />

          <Tweet
            name="Bobur"
            description="4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"
            profilePic="src/imgs/bobur.png"
            time="Apr 1"
            user="@bobur_mavlonov"
          />

          <Tweet
            name="Bobur"
            description="Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
            Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
            Gap faqat biznes trenerlar haqida emas."
            profilePic="src/imgs/bobur.png"
            time="Apr 1"
            user="@bobur_mavlonov"
          />

          <Tweet
            name="Bobur"
            description="A bo'pti maskamasman"
            img="src/imgs/post2.png"
            profilePic="src/imgs/bobur.png"
            time="Apr 1"
            user="@bobur_mavlonov"
          />

        </div>

        <div className="page__right">
          <div className="flex flex-col gap-4 justify-start items-start py-2.5 px-7">
            <SearchBar />

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

            <List title="Trends for you">
              <NewsItem
                img="src/imgs/Vector.png"
                subject="Trending in Germany"
              >
                <strong>Revolution</strong>
              </NewsItem>
              <NewsItem
                img="src/imgs/Vector.png"
                subject="Trending in Germany"
              >
                <strong>Revolution</strong>
              </NewsItem>
              <NewsItem
                img="src/imgs/Vector.png"
                subject="Trending in Germany"
              >
                <strong>Revolution</strong>
              </NewsItem>
            </List>



            <Text color="gray">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc.</Text>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}