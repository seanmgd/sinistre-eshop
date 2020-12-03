import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Checkbox = styled.input.attrs(props => ({
  ...props,
  type: 'checkbox',
  'data-testid': 'checkbox',
}))`
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border-radius: 2px;
  height: 16px;
  width: 16px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary.base};
  position: relative;
  margin: 0;

  &:checked {
    margin: 0px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 4px;
      height: 8px;
      transform: rotateZ(45deg);
      top: 1px;
      left: 4px;
      border-bottom: 2px;
      border-right: 2px;
      border-left: 0;
      border-style: solid;
      border-top: 0;
    }
  }

  &:disabled {
    opacity: 0.2;
  }
`

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
}
