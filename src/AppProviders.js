import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'
import { UserContextProvider } from './contexts/user'

export function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <GlobalStyles />
        {children}
      </UserContextProvider>
    </ThemeProvider>
  )
}
