import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const PADDINGS = {
  small: '4px',
  medium: '8px',
  large: '12px',
  'x-large': '16px',
}
const SIZES = Object.keys(PADDINGS)
const COLORS = Object.keys(theme.light.colors)

export const Button = styled.button`
  color: ${({ color, theme }) => theme.colors[color].light};
  padding: ${({ size }) => PADDINGS[size]};
  background-color: ${({ color, theme }) => theme.colors[color].base};
  ${({ disabled }) => disabled && `opacity: .5`};
  font-size: 14px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: 0.5s ease;

  :hover {
    transform: translateY(1px);
  }
`

Button.propTypes = {
  color: PropTypes.oneOf(COLORS).isRequired,
  size: PropTypes.oneOf(SIZES).isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  size: 'medium',
}

Button.COLORS = COLORS
Button.SIZES = SIZES
