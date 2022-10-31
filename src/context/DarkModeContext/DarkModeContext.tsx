import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TweetProps } from '../../components/Tweet/Tweet';

interface DarkModeContextProps {
  darkModeActive: Boolean;
  setDarkModeActive: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface DarkModeContextProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  darkModeActive: JSON.parse(String(localStorage.getItem("darkMode"))),
  setDarkModeActive: () => {}
});

export function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
  const [darkModeActive, setDarkModeActive] = useState<Boolean>(JSON.parse(String(localStorage.getItem("darkMode"))));

  useEffect(() => {
    setDarkModeActive(JSON.parse(String(localStorage.getItem("darkMode"))));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkModeActive));
    const root = document.querySelector('#root');
    root?.classList.toggle('dark');
  }, [darkModeActive]);

  return (
    <DarkModeContext.Provider
      value={{
        darkModeActive,
        setDarkModeActive
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  const { darkModeActive, setDarkModeActive } = context;
  return { darkModeActive, setDarkModeActive };
}