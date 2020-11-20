import PropTypes from 'prop-types'
import { StyledCheckbox } from './Checkbox.styles'

export function Checkbox({ disabled, checked }) {
  return (
    <StyledCheckbox
      disabled={disabled}
      defaultChecked={checked}
      type="checkbox"
      data-testid="checkbox"
    />
  )
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
}
