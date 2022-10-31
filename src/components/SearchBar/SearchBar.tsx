import { useState } from "react";
import { Icon } from "../Icon/Icon";

export interface SearchBarProps {}

export function SearchBar() {
  const [active, setActive] = useState(false);

  return (
    <div className="search w-full flex py-2.5 px-4 rounded-full bg-dark-7 dark:bg-dark-3 text-dark-5 dark:text-dark-6 focus-within:py-2 focus-within:px-3.5 focus-within:border-2 focus-within:border-blue-1 sticky top-2.5">
      <Icon icon="search" color={ active ? 'blue' : 'gray' } className="focus:fill-blue-1" />
      <input type="text" placeholder="Search Twitter" className="bg-transparent outline-none w-full pl-4" onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
    </div>
  )
}