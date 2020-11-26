import React from 'react'
import { render } from '../../renderTest'
import { Button } from './Button'

function createProps(props) {
  return { children: 'My button', ...props }
}

describe('<Button />', () => {
  it('should render a button', () => {
    const props = createProps()
    const { container } = render(<Button {...props} />)

    expect(container.firstChild.disabled).toBe(false)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a disabled button', () => {
    const props = createProps()
    const { container } = render(<Button {...props} disabled />)

    expect(container.firstChild.disabled).toBe(true)
  })

  Button.COLORS.forEach(color => {
    it(`should render a button with ${color} color`, () => {
      const props = createProps()
      const { container } = render(<Button {...props} color={color} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  Button.SIZES.forEach(size => {
    it(`should render a ${size} button`, () => {
      const props = createProps()
      const { container } = render(<Button {...props} size={size} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
