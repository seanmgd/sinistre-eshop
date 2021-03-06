import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, PageTitle } from '../../components'
import { useUserContext } from '../../contexts/user'
import { checkValidity } from '../../utils/checkFormValidity'
import { renderForm } from '../../utils/renderForm'
import { setPageTitle } from '../../utils/setPageTitle'
import { Form, FormContainer, NewClientText, SwitchForm } from './Login.styles'

export default function Login() {
  const { t } = useTranslation()

  const [formControls, setFormControls] = React.useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: t('mail_address'),
        },
        value: '',
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
          placeholder: t('password'),
        },
        value: '',
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

  const [loginMode, setLoginMode] = React.useState(true)
  const { login } = useUserContext()

  React.useEffect(() => {
    setPageTitle(t('login'))
  }, [t])

  React.useEffect(() => {
    if (loginMode === false) {
      setFormControls({
        ...formControls,
        controls: {
          firstName: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: t('firstname'),
            },
            value: '',
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
              placeholder: t('lastname'),
            },
            value: '',
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
              placeholder: t('mail_address'),
            },
            value: '',
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
              placeholder: t('password'),
            },
            value: '',
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
              placeholder: t('mail_address'),
            },
            value: '',
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
              placeholder: t('password'),
            },
            value: '',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMode, t])

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
    stopEvent(event)

    const loginParams = {
      username: formControls.controls.email.value,
      password: formControls.controls.password.value,
    }
    login(loginParams)
  }

  return (
    <FormContainer>
      <Form>
        <PageTitle>{loginMode ? t('login') : t('register')}</PageTitle>

        {renderForm(formElements, inputChangedHandler)}

        <Button size="large" onClick={loginMode && loginHandler}>
          {loginMode ? t('login') : t('register')}
        </Button>
      </Form>

      <NewClientText>
        <span>{loginMode ? t('new_user') : t('user')}</span>
      </NewClientText>

      <SwitchForm size="large" onClick={() => setLoginMode(!loginMode)}>
        {loginMode ? t('create_account') : t('login_account')}
      </SwitchForm>
    </FormContainer>
  )
}
