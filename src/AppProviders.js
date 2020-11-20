import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'

export function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  )
}
