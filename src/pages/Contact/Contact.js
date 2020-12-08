import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { Button } from '../../components'
import { checkValidity } from '../../utils/checkFormValidity'
import { renderForm } from '../../utils/renderForm'
import { sendMessage } from '../../services/contact/query'
import {
  DivContainer,
  Title,
  FormContact,
  MessageConfirm,
} from './Contact.style'

export default function Contact() {
  const { t } = useTranslation()
  const [message, setMessage] = React.useState('')
  const [formControls, setFormControls] = React.useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: { type: 'email', placeholder: t('mail_address') },
        value: '',
        validation: { required: true, isEmail: true },
        valid: false,
        touched: false,
      },
      message: {
        elementType: 'textarea',
        elementConfig: { rows: '5', cols: '1', placeholder: t('message') },
        value: '',
        validation: { required: true, minLength: 1 },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  })
  React.useEffect(() => {
    setPageTitle(t('contact'))
  }, [t])
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

  const submitMessage = event => {
    event.preventDefault()
    const dataContact = {
      email: formControls.controls.email.value,
      message: formControls.controls.message.value,
    }
    sendMessage(dataContact)
      .then(response => {
        response.statusText === 'OK'
          ? setMessage(t('confirmMessageContact'))
          : setMessage(t('errorMessageContact'))
      })
      .catch(() => setMessage(t('errorMessageContact')))
  }

  const disableButton = !(
    formControls.controls.email.valid &&
    formControls.controls.email.value !== '' &&
    formControls.controls.message.valid &&
    formControls.controls.message.value !== ''
  )

  return (
    <DivContainer>
      <Title>{t('contact')}</Title>
      <FormContact>
        {renderForm(formElements, inputChangedHandler)}
        <Button
          size="large"
          color="primary"
          disabled={disableButton}
          type="submit"
          onClick={event => submitMessage(event)}
        >
          {t('submit')}
        </Button>
      </FormContact>
      {message && (
        <MessageConfirm animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {message}
        </MessageConfirm>
      )}
    </DivContainer>
  )
}
