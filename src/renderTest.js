import { render as renderTest } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

// Export it first to allow overrides.
export * from '@testing-library/react'
export { renderInAppProviders as render }

export function renderInAppProviders(node, options) {
  const { rerender, ...res } = renderTest(
    <ThemeProvider theme={theme} children={node} />,
    options,
  )

  return {
    ...res,
    rerender: node => rerender(<ThemeProvider theme={theme} children={node} />),
  }
}
