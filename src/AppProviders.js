import { ThemeSwitcherProvider } from './contexts/themeSwitcher'
import { UserContextProvider } from './contexts/user'
import { CartContextProvider } from './contexts/cart'

export function AppProviders({ children }) {
  return (
    <ThemeSwitcherProvider>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </ThemeSwitcherProvider>
  )
}
