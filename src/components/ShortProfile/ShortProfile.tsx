import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import './shortProfile.css';

export interface ShortProfileProps {
  profilePic: string;
}

export function ShortProfile({ profilePic }: ShortProfileProps){
  return (
   <div className="shortProfile grid items-center gap-2.5">
    <img src={profilePic} alt="Davide Biscuso" className="shortProfile__image rounded-full" />

    <div className="shortProfile__text">
      <Heading color="black" size="sm" className="leading-4">Davide Biscuso</Heading>
      <Text color="gray" size="lg" className="leading-4">@biscuttu</Text>
    </div>

    <Icon icon="ellipses" className="justify-self-end hover:bg-dark-7 dark:hover:bg-dark-4 rounded-full p-2 box-content cursor-pointer" />
   </div>
  )
}
