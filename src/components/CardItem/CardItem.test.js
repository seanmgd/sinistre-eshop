import { fireEvent } from '@testing-library/react'
import { render } from '../../renderTest'
import { CardItem } from './CardItem'

function createProps(props = {}) {
  return { label: 'this is a test', to: '/', imgUrl: 'testimg', ...props }
}

describe('Card item', () => {
  it('should render card item', () => {
    const { container } = render(<CardItem {...createProps()} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should spread other props on root element', () => {
    const testId = 'test-id'

    const props = createProps({
      onClick: jest.fn(),
      className: 'test-class',
      'data-testid': testId,
    })

    const { container, getByTestId } = render(<CardItem {...props} />)

    fireEvent.click(getByTestId(testId))

    expect(props.onClick).toHaveBeenCalledTimes(1)
    expect(container.firstChild).toMatchSnapshot()
  })

  CardItem.COLORS.forEach(color => {
    it(`should render a card item  with ${color} background color and text color`, () => {
      const props = createProps({
        hoverColor: color,
        labelColor: color,
      })

      const { container } = render(<CardItem {...props} />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  CardItem.SIZES.forEach(labelSize => {
    it(`should render a ${labelSize} text card item`, () => {
      const props = createProps({ labelSize })

      const { container } = render(<CardItem {...props} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
