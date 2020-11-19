import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'

const CENTER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  flexDirection: 'column',
}

addDecorator(withKnobs)
addDecorator(storyFn => <div style={CENTER_STYLE}>{storyFn()}</div>)

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
