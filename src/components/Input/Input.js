import PropTypes from 'prop-types'
import {
  InputElement,
  InputField,
  InputLabel,
  InputWrapper,
} from './input.styles'

const TYPES = ['input', 'select', 'textarea']

export const Input = ({
  label,
  value,
  icon,
  type,
  onChange,
  invalid,
  touched,
  inputElementProps,
  ...props
}) => {
  const inputMapping = {
    input: (
      <InputElement
        {...inputElementProps}
        invalid={invalid}
        touched={touched}
        value={value}
        onChange={onChange}
      />
    ),
    textarea: (
      <InputElement
        {...inputElementProps}
        invalid={invalid}
        touched={touched}
        value={value}
        onChange={onChange}
        as="textarea"
      />
    ),
    select: (
      <InputElement
        invalid={invalid}
        touched={touched}
        value={value}
        onChange={onChange}
        as="select"
      >
        {inputElementProps?.options?.map(option => (
          <option key={value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </InputElement>
    ),
  }
  return (
    <InputWrapper {...props}>
      {label && <InputLabel>{label}</InputLabel>}

      <InputField>
        {inputMapping[type]}
        {icon}
      </InputField>
    </InputWrapper>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(TYPES).isRequired,
  label: PropTypes.string,
  icon: PropTypes.number,
  inputElementProps: PropTypes.object,
  invalid: PropTypes.bool,
  touched: PropTypes.bool,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'input',
}

Input.TYPES = TYPES
