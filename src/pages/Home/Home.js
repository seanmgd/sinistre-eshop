import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ToastNotification, Newsletter } from '../../components'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { setPageTitle } from '../../utils/setPageTitle'
import { HomeTitle, HomeWrapper, ButtonContainer } from './Home.styles'
import { sendNotification } from '../../services/firebase/query'
import { stopEvent } from '@ttrmz/react-utils'

export default function Home() {
  const { t, i18n } = useTranslation()
  const { switchTheme } = useThemeSwitcher()
  const [lang, setLang] = React.useState(i18n.language)
  const [showToast, setShowToast] = React.useState(false)

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  const handleSwitchLang = event => {
    stopEvent(event)
    const newLang = lang.toLowerCase().includes('fr') ? 'en' : 'fr'
    setLang(newLang)
    i18n.changeLanguage(newLang)
  }

  const handleNotification = event => {
    stopEvent(event)
    setShowToast(!showToast)
    sendNotification()
  }

  return (
    <HomeWrapper>
      <HomeTitle>{t('welcome')}</HomeTitle>

      <Newsletter />

      <ButtonContainer>
        <Button onClick={switchTheme} size="large" hover={true}>
          {t('switch_theme')}
        </Button>

        <Button onClick={handleSwitchLang} size="large" hover={true}>
          {t('switch_lang')}
        </Button>

        <Button onClick={handleNotification} size="large" hover={true}>
          {t('send_notification')}
        </Button>
      </ButtonContainer>
      {showToast && (
        <div>
          <ToastNotification
            textNotification="Tu peux checker dans network que le call api se fait bien, mais la notif ne s'envoie pas..
        Du coup préviens moi sur discord, donne moi le token qui est dans la console et je te trigger ça"
          />
        </div>
      )}
    </HomeWrapper>
  )
}
