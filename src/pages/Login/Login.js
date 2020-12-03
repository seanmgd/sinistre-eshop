import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { Button } from '../../components'
import { renderForm } from '../../utils/renderForm'
import { checkValidity } from '../../utils/checkFormValidity'
import { useUserContext } from '../../contexts/user'
import { FormContainer, Form, NewClientText } from './Login.styles'

export default function Login() {
  const { t } = useTranslation()
  const [formControls, setFormControls] = React.useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: '',
        },
        value: '',
        label: t('mail_address'),
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
          placeholder: '',
        },
        value: '',
        label: t('password'),
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
  const { login, error } = useUserContext()

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
              placeholder: '',
            },
            value: '',
            label: t('firstname'),
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
              placeholder: '',
            },
            value: '',
            label: t('lastname'),
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
              placeholder: '',
            },
            value: '',
            label: t('mail_address'),
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
              placeholder: '',
            },
            value: '',
            label: t('password'),
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
              placeholder: '',
            },
            value: '',
            label: t('mail_address'),
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
              placeholder: '',
            },
            value: '',
            label: t('password'),
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
      <Button size="large" onClick={() => setLoginMode(!loginMode)}>
        {loginMode ? t('create_account') : t('login_account')}
      </Button>
    </FormContainer>
  )
}
