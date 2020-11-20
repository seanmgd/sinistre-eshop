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
    type="checkbox"
  />
)

ToStorybook.story = {
  name: 'Checkbox',
}
