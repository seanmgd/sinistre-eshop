import React from 'react'
import { render, fireEvent } from '../../renderTest'
import { PageTitle } from './PageTitle'

function createProps(props) {
  return { children: 'this is a test', ...props }
}

describe('<Avatar />', () => {
  it('should render a page title', () => {
    const props = createProps()
    const { container } = render(<PageTitle {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should spread other props on root element', () => {
    const props = createProps({
      style: { backgroundColor: 'red' },
      className: 'test-class',
      onClick: jest.fn(),
    })
    const { container, getByText } = render(<PageTitle {...props} />)

    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(getByText(props.children))
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
