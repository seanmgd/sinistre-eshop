import { render as renderTest } from '@testing-library/react'
import { AppProviders } from './AppProviders'
import theme from './styles/theme'

// Export it first to allow overrides.
export * from '@testing-library/react'
export { renderInAppProviders as render }

export function renderInAppProviders(node, options) {
  const { rerender, ...res } = renderTest(
    <AppProviders theme={theme} children={node} />,
    options,
  )

  return {
    ...res,
    rerender: node => rerender(<AppProviders theme={theme} children={node} />),
  }
}
