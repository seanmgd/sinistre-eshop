import PropTypes from 'prop-types'
import styled from 'styled-components'

export const TextError = ({ errorMsg, ...rest }) => {
  return <Error {...rest}>{errorMsg}</Error>
}

TextError.propTypes = {
  errorMsg: PropTypes.string.isRequired,
}

const Error = styled.p`
  color: ${({ theme }) => theme.colors.error.base};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
  }
`
