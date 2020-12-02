import { Loader } from './Loader'

export default {
  title: 'Data display/Loader',
  component: Loader,
}
export const ToStorybook = () => <Loader />

ToStorybook.story = {
  name: 'Loader',
}
