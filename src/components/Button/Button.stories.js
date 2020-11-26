import { boolean, select, text } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
  title: 'Action/Button',
  component: Button,
}

export const ToStorybook = () => (
  <Button
    children={text('children', 'My button')}
    color={select('color', Button.COLORS, Button.defaultProps.color)}
    disabled={boolean('disabled', Button.defaultProps.disabled)}
    size={select('size', Button.SIZES, Button.defaultProps.size)}
  />
)

ToStorybook.story = {
  name: 'Button',
}
