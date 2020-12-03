import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { Checkbox as CheckboxComponent } from './Checkbox'

export default {
  title: 'Form elements/Checkbox',
  component: CheckboxComponent,
}

export const Checkbox = () => (
  <CheckboxComponent
    disabled={boolean('disabled', CheckboxComponent.defaultProps.disabled)}
    checked={boolean('checked', CheckboxComponent.defaultProps.checked)}
  />
)

export const Example = () => {
  const [checked, setChecked] = React.useState(false)

  return <CheckboxComponent checked={checked} onChange={setChecked} />
}
