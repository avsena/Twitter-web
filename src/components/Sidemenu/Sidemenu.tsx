import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Navlink } from "../Navlink/Navlink";
import { ShortProfile } from "../ShortProfile/ShortProfile";
import { Link } from "react-router-dom";

import profilePic from "../../imgs/bobur.png";

import './navbar.css';

export interface SidemenuProps {
  currentPage: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more';
}

export function Sidemenu({ currentPage }: SidemenuProps) {
  return (
    <nav className="navbar h-screen top-0 sticky">
      <div className="navbar__container grid h-full p-2.5">
        <div className="flex flex-col gap-1 mb-2.5">
          <Icon icon="logo" color="blue" className="ml-2.5"/>

          <Navlink
            icon="home"
            iconFill="home-fill"
            active={ currentPage === 'home' }
            page="/home"
            >
            Home
          </Navlink>

          <Navlink
            icon="explore"
            iconFill="explore-fill"
            active={ currentPage === 'explore' }
            page="/"
            >
            Explore
          </Navlink>

          <Navlink
            icon="notification"
            iconFill="notification-fill"
            active={ currentPage === 'notifications' }
            page="/"
            >
            Notifications
          </Navlink>

          <Navlink
            icon="message"
            iconFill="message-fill"
            active={ currentPage === 'messages' }
            page="/"
            >
            Messages
          </Navlink>

          <Navlink
            icon="bookmark"
            iconFill="bookmark-fill"
            active={ currentPage === 'bookmarks' }
            page="/"
            >
            Bookmarks
          </Navlink>

          <Navlink
            icon="lists"
            iconFill="lists-fill"
            active={ currentPage === 'lists' }
            page="/"
            >
            Lists
          </Navlink>

          <Navlink
            icon="profile"
            iconFill="profile-fill"
            active={ currentPage === 'profile' }
            page="/profile"
            >
            Profile
          </Navlink>

          <Navlink
            icon="more"
            iconFill="more"
            active={ currentPage === 'more' }
            page="/"
            >
            More
          </Navlink>
        </div>


        <Link to={"/"}><Button size="big" className="w-auto self-start mr-5 box-border">Tweet</Button></Link>

        <ShortProfile profilePic={profilePic} />
      </div>
    </nav>
  )
}