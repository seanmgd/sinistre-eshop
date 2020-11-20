import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { AppProviders } from '../src/AppProviders'

addDecorator(withKnobs)
addDecorator(storyFn => <AppProviders>{storyFn()}</AppProviders>)

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'sinistre-eshop',
    }),
    panelPosition: 'right',
  },
  backgrounds: [
    { name: 'Default', value: '#ffffff', default: true },
    { name: 'Background', value: '#F6F6F6' },
    { name: 'Dark', value: '#181a1d' },
  ],
})

configure(require.context('../src', true, /\.stories\.js$/), module)
