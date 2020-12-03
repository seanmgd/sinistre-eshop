import { text } from '@storybook/addon-knobs'
import { TextError } from './TextError'

export default {
  title: 'Data display/TextError',
  component: TextError,
}
export const ToStorybook = () => (
  <TextError errorMsg={text('errorMsg', 'Ceci est une erreur')} />
)

ToStorybook.story = {
  name: 'TextError',
}
