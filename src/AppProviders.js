import { ThemeSwitcherProvider } from './contexts/themeSwitcher'

export function AppProviders({ children }) {
  return <ThemeSwitcherProvider>{children}</ThemeSwitcherProvider>
}
