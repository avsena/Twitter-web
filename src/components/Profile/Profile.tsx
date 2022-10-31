import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface ProfileProps {
  banner: string;
  profilePic: string;
  name: string;
  user: string;
  bio: string;
  location: string;
  joined: string;
  following: number;
  followers: number;
}

export function Profile({ banner, profilePic, name, user, bio, location, joined, following, followers }: ProfileProps) {
  return (
    <div className="profile">
      <header className="relative">
        <img src={banner} alt={ name } className="h-52 w-full aspect-video object-cover" />
        <img src={profilePic} alt={ name } className="rounded-full border-4 border-dark-1 absolute left-3 bottom-[-4.5rem] w-36" />
      </header>

      <Button style="outline" className="block ml-auto mt-2.5 mb-5">Edit profile</Button>

      <Heading size="xl">{ name }</Heading>
      <Text size="lg" className="mb-2.5" color="gray" asChild>
        <p>{ user }</p>
      </Text>

      <Text size="lg" className="mb-2.5" asChild>
        <p>{ bio }</p>
      </Text>

      <div className="profile__info flex items-center gap-x-2 mb-2.5">
        <div className="profile__location flex items-center gap-x-1">
          <Icon size="1.125rem" icon='location' color="gray"/>
          <Text size="lg" color="gray">{ location }</Text>
        </div>

        <div className="profile__join flex items-center gap-x-1">
          <Icon size="1.125rem" icon='calendar' color="gray"/>
          <Text size="lg" color="gray">Joined { joined }</Text>
        </div>
      </div>

      <div className="profile__numbers flex items-center gap-x-2">
        <div className="profile__following flex items-center gap-x-1">
          <Heading size="sm">{ followers }</Heading>
          <Text size="lg" color="gray">Following</Text>
        </div>

        <div className="profile__followers flex items-center gap-x-1">
          <Heading size="sm">{ following }</Heading>
          <Text size="lg" color="gray">Followers</Text>
        </div>
      </div>

    </div>
  )
}