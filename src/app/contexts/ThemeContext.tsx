import React, { createContext, useContext, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState('light')

  return {
    theme,
    setTheme
  }
}

const ThemeContext = createContext<ReturnType<typeof ThemeController>>({
  theme: 'light',
  setTheme: () => { }
})

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={ThemeController()}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useToogleTheme = () => useContext(ThemeContext)