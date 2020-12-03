import { render } from '../../renderTest'
import ToastNotification from './ToastNotification'

describe('Toast notification', () => {
  it('should render a notification', () => {
    const { container } = render(<ToastNotification />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
