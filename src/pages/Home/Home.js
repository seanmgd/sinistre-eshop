import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { setPageTitle } from '../../utils/setPageTitle'
import { HomeTitle, HomeWrapper } from './Home.styles'
import { sendNotification } from '../../services/firebase/query'

export default function Home() {
  const { t, i18n } = useTranslation()
  const { switchTheme } = useThemeSwitcher()
  const [lang, setLang] = React.useState(i18n.language)

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  const handleSwitchLang = () => {
    const newLang = lang.toLowerCase().includes('fr') ? 'en' : 'fr'
    setLang(newLang)
    i18n.changeLanguage(newLang)
  }

  return (
    <HomeWrapper>
      <HomeTitle>{t('welcome')}</HomeTitle>

      <div>
        <Button onClick={switchTheme} size="large" hover={true}>
          {t('switch_theme')}
        </Button>

        <Button onClick={handleSwitchLang} size="large" hover={true}>
          {t('switch_lang')}
        </Button>

        <Button onClick={sendNotification} size="large" hover={true}>
          {t('send_notification')}
        </Button>
      </div>
    </HomeWrapper>
  )
}
