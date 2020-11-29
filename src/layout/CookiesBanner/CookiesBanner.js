import {
  CookiesBannerContainer,
  CookiesTextContainer,
} from './CookiesBanner.style'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button'
import React from 'react'

export const CookiesBanner = () => {
  const { t } = useTranslation()
  const [displayCookies, setDisplayCookies] = React.useState(false)

  React.useEffect(() => {
    setDisplayCookies(!(localStorage.getItem('cookies') === 'OK'))
  }, [])

  const acceptCookies = () => {
    setDisplayCookies(false)
    localStorage.setItem('cookies', 'OK')
  }

  return (
    <>
      {displayCookies ? (
        <CookiesBannerContainer>
          <CookiesTextContainer>
            <span>{t('cookies_rgpd')}</span>
            <Button onClick={acceptCookies} color="grey" size={'medium'}>
              {t('accept')}
            </Button>
          </CookiesTextContainer>
        </CookiesBannerContainer>
      ) : (
        <div />
      )}
    </>
  )
}
