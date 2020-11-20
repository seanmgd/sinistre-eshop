import React from 'react'
import { render, fireEvent } from '../../renderTest'
import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
  it('should render a unchecked Checkbox', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.checked).toEqual(false)
  })
  it('should render a checked Checkbox', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  })
  it('should render a undisabled Checkbox', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.disabled).toEqual(false)
  })
  it('should render a disabled Checkbox', () => {
    const { getByTestId } = render(<Checkbox disabled />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.disabled).toEqual(true)
  })
})
