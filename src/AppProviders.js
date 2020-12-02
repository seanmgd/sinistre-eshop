import { ThemeSwitcherProvider } from './contexts/themeSwitcher'
import { UserContextProvider } from './contexts/user'

export function AppProviders({ children }) {
    return (
        <ThemeSwitcherProvider>
            <UserContextProvider>{children}</UserContextProvider>
        </ThemeSwitcherProvider>
    )
}
