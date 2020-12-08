import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useTranslation } from 'react-i18next'
import {
  NewsletterContainer,
  NewsletterText,
  NewsletterForm,
  StatusMessage,
} from './Newsletter.styles'

const CustomForm = ({ status, onValidated }) => {
  const { t } = useTranslation()
  let email
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <>
      <NewsletterForm>
        <input
          ref={node => (email = node)}
          type="email"
          placeholder={t('mail_address')}
        />
        <br />
        <button onClick={submit}>{t('submit')}</button>
      </NewsletterForm>
      {status === 'sending' && (
        <StatusMessage>{t('newsletter_loading')}</StatusMessage>
      )}
      {status === 'error' && (
        <StatusMessage>{t('newsletter_error')}</StatusMessage>
      )}
      {status === 'success' && (
        <StatusMessage>{t('newsletter_success')}</StatusMessage>
      )}
    </>
  )
}

export const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <NewsletterContainer>
      <NewsletterText>{t('newsletter_subscribe')}</NewsletterText>
      <MailchimpSubscribe
        url={process.env.REACT_APP_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </NewsletterContainer>
  )
}
