import { text } from '@storybook/addon-knobs'
import ToastNotification from './ToastNotification'

export default {
  title: 'Action/ToastNotification',
  component: ToastNotification,
}

export const ToStorybook = () => (
  <ToastNotification
    textNotification={text(
      'Text de la notification',
      ToastNotification.defaultProps.text,
    )}
  />
)

ToStorybook.story = {
  name: 'ToastNotification',
}
