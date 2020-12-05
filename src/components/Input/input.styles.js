import styled from 'styled-components'

export const InputWrapper = styled.label`
  width: 100%;
  margin-bottom: 16px;
`

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary.base};
  display: block;
  overflow-wrap: break-word;
  margin-bottom: 4px;
`

export const InputField = styled.div`
  width: 100%;
`

export const InputElement = styled.input`
  border: ${({ touched, theme, invalid }) =>
    invalid && touched
      ? `1px solid ${theme.colors.error.base}`
      : `1px ${theme.colors.grey.light} solid`};
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 16px;
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => `${theme.colors.grey.dark}`};
  }
  background-color: ${({ touched, theme, invalid }) =>
    invalid && touched && `${theme.colors.error.light}`};
`
