import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 2em;
  button {
    width: 100%;
  }
`

export const Form = styled.form`
  padding: 20px;
  border: ${({ theme }) => theme.colors.primary.base} 1px solid;
  border-radius: 4px;
  margin-bottom: 25px;
  h1 {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
  }
  input {
    padding: 10px;
  }
`

export const NewClientText = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.base};
  color: ${({ theme }) => theme.colors.primary.light};
  line-height: 0.1em;
  margin: 10px 0 20px;
  span {
    background: ${({ theme }) => theme.colors.primary.base};
    padding: 4px 8px;
  }
`
