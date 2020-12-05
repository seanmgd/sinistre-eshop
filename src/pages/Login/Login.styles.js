import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 2em;
  font-size: 16px;
  button {
    width: 100%;
  }
`

export const Form = styled.form`
  margin-bottom: 25px;
  h1 {
    margin-bottom: 15px;
    text-align: center;
  }
  label {
    display: inline-block;
  }
  input {
    padding: 10px;
  }
`

export const NewClientText = styled.h2`
  display: inline-block;
  margin-right: 4px;
`

export const SwitchForm = styled.a`
  cursor: pointer;
  font-weight: 600;
`
