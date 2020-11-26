import PropTypes from 'prop-types'
import { StyledCheckbox } from './Checkbox.styles'

export function Checkbox({...props }) {
  return (
    <StyledCheckbox
      {...props}
      type="checkbox"
      data-testid="checkbox"
    />
  )
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
}
