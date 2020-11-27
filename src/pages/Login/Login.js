import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { Button } from '../../components'
import styled from 'styled-components'
import { renderForm } from '../../utils/renderForm'
import { checkValidity } from '../../utils/checkFormValidity'
import { devices } from '../../constants/devices'
import { useUserContext } from '../../contexts/user'

export default function Login() {
  const [formControls, setFormControls] = useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address',
        },
        value: '',
        label: 'Adresse E-mail :',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        label: 'Mot de passe :',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  })
  const [loginMode, setLoginMode] = useState(true)
  const { t } = useTranslation()
  const { login, error } = useUserContext()

  React.useEffect(() => {
    setPageTitle(t('login'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  React.useEffect(() => {
    if (loginMode === false) {
      setFormControls({
        ...formControls,
        controls: {
          firstName: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'firstName',
            },
            value: '',
            label: 'Firstname :',
            validation: {
              required: true,
            },
            valid: false,
            touched: false,
          },
          lastName: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'lastname',
            },
            value: '',
            label: 'Lastname :',
            validation: {
              required: true,
            },
            valid: false,
            touched: false,
          },
          email: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Mail Address',
            },
            value: '',
            label: 'Adresse E-mail :',
            validation: {
              required: true,
              isEmail: true,
            },
            valid: false,
            touched: false,
          },
          password: {
            elementType: 'input',
            elementConfig: {
              type: 'password',
              placeholder: 'Password',
            },
            value: '',
            label: 'Mot de passe :',
            validation: {
              required: true,
              minLength: 6,
            },
            valid: false,
            touched: false,
          },
        },
      })
    } else {
      setFormControls({
        controls: {
          email: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Mail Address',
            },
            value: '',
            label: 'Adresse E-mail :',
            validation: {
              required: true,
              isEmail: true,
            },
            valid: false,
            touched: false,
          },
          password: {
            elementType: 'input',
            elementConfig: {
              type: 'password',
              placeholder: 'Password',
            },
            value: '',
            label: 'Mot de passe :',
            validation: {
              required: true,
              minLength: 6,
            },
            valid: false,
            touched: false,
          },
        },
        isSignup: true,
      })
    }
  }, [loginMode])

  const formElements = []
  for (let key in formControls.controls) {
    formElements.push({
      id: key,
      config: formControls.controls[key],
    })
  }

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...formControls.controls,
      [controlName]: {
        ...formControls.controls[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          formControls.controls[controlName].validation,
        ),
        touched: true,
      },
    }
    setFormControls({ controls: updatedControls })
  }

  const loginHandler = event => {
    event.preventDefault()
    const loginParams = {
      username: formControls.controls.email.value,
      password: formControls.controls.password.value,
    }
    login(loginParams)
  }

  return (
    <>
      <FormContainer>
        <Form>
          <PageTitle>{loginMode ? t('login') : t('register')}</PageTitle>
          {renderForm(formElements, inputChangedHandler)}
          <Button size="medium" onClick={loginMode && loginHandler}>
            {loginMode ? t('login') : t('register')}
          </Button>
        </Form>
        <NewClientText>
          <span>{loginMode ? t('new user') : t('user')}</span>
        </NewClientText>
        <Button size="medium" onClick={() => setLoginMode(!loginMode)}>
          {loginMode ? t('create account') : t('login to account')}
        </Button>
      </FormContainer>
    </>
  )
}

export const FormContainer = styled.div`
  & button {
    width: 100%;
    color: white;
  }
  @media ${devices.mobileM && devices.mobileS} {
    margin: 10% 15%;
  }
  @media ${devices.tablet} {
    margin: 10% 20%;
  }
  @media ${devices.laptop} {
    margin: 5% 38%;
  }
`

export const Form = styled.form`
  padding: 20px;
  border: ${({ theme }) => theme.colors.primary.light} 1px solid;
  border-radius: 4px;
  margin-bottom: 25px;
  & h1 {
    margin-bottom: 15px;
  }
  & label {
    display: inline-block;
  }
`

export const NewClientText = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.grey.light};
  line-height: 0.1em;
  margin: 10px 0 20px;
  & span {
    background: #fff;
    padding: 0 10px;
  }
`
