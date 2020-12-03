import { render } from '../../renderTest'
import { ToastNotification } from './ToastNotification'

describe('<ToastNotification />', () => {
  it('should render a notification', () => {
    const { container } = render(<ToastNotification />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
