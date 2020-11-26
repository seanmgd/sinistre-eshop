import React from 'react'
import { render, fireEvent } from '../../renderTest'
import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
  it('should render a unchecked Checkbox', () => {
    const { getByTestId } = render(<Checkbox readOnly />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.checked).toEqual(false)
    expect(checkbox).toMatchSnapshot()
  })

  it('should render a checked Checkbox', () => {
    const props = { onChange: jest.fn() }
    const { getByTestId } = render(<Checkbox {...props} />)
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox)

    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(checkbox).toMatchSnapshot()
  })

  it('should render a undisabled Checkbox', () => {
    const { getByTestId } = render(<Checkbox readOnly />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.disabled).toEqual(false)
    expect(checkbox).toMatchSnapshot()
  })

  it('should render a disabled Checkbox', () => {
    const { getByTestId } = render(<Checkbox disabled readOnly />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.disabled).toEqual(true)
    expect(checkbox).toMatchSnapshot()
  })
})
