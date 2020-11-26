import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'

const ThemeSwitcherContext = React.createContext()

const LOCAL_STORAGE_KEY = 'sinistre-theme-dark'

export const useThemeSwitcher = () => React.useContext(ThemeSwitcherContext)

export function ThemeSwitcherProvider({ children, ...props }) {
  const [dark, setDark] = React.useState(() => {
    const prevValue = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
    return prevValue || false
  })

  const switchTheme = React.useCallback(() => {
    const newValue = !dark
    setDark(newValue)
    window.localStorage.setItem(JSON.stringify(LOCAL_STORAGE_KEY), newValue)
  }, [dark, setDark])

  return (
    <ThemeSwitcherContext.Provider
      value={React.useMemo(() => ({ dark, switchTheme }), [dark, switchTheme])}
      {...props}
    >
      <ThemeProvider theme={dark ? theme.dark : theme.light}>
        <GlobalStyles />

        {children}
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  )
}
