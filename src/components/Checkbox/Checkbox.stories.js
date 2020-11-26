import React from 'react'
import { Checkbox } from './Checkbox'
import { boolean } from '@storybook/addon-knobs'
import { StyledCheckbox } from './Checkbox.styles'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export const ToStorybook = () => (
  <StyledCheckbox
    disabled={boolean('disabled', Checkbox.defaultProps.disabled)}
    checked={boolean('checked', Checkbox.defaultProps.checked)}
  />
)

ToStorybook.story = {
  name: 'Checkbox',
}

export const Example = () => {
const [check, setCheck] = React.UseEffect
 return (
  <StyledCheckbox
      disabled={boolean('disabled', Checkbox.defaultProps.disabled)}
      checked={boolean('checked', Checkbox.defaultProps.checked)}
  />)
}


