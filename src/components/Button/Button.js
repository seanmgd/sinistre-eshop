import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const PADDINGS = {
  small: '4px',
  medium: '8px',
  large: '12px 14px',
  'x-large': '16px',
}
const SIZEFONT = {
  medium: '14px',
  large: '16px',
}
const FONTSIZE = Object.keys(SIZEFONT)
const SIZES = Object.keys(PADDINGS)
const COLORS = Object.keys(theme.light.colors)

export const Button = styled.button`
  color: ${({ color, theme }) => theme.colors[color].light};
  padding: ${({ size }) => PADDINGS[size]};
  background-color: ${({ color, theme }) => theme.colors[color].base};
  ${({ disabled }) => disabled && `opacity: .5`};
  font-size: ${({ fontSize }) => SIZEFONT[fontSize]};
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: 0.5s ease;

  ${({ hover }) =>
    hover &&
    `:hover {
    transform: translateY(1px);
  }`}
`

Button.propTypes = {
  color: PropTypes.oneOf(COLORS).isRequired,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  fontSize: PropTypes.oneOf(FONTSIZE),
  size: PropTypes.oneOf(SIZES).isRequired,
}

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  hover: false,
  fontSize: 'large',
  size: 'large',
}

Button.COLORS = COLORS
Button.SIZES = SIZES
