import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Newsletter } from '../../components'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { setPageTitle } from '../../utils/setPageTitle'
import { HomeTitle, HomeWrapper, ButtonContainer } from './Home.styles'
import { stopEvent } from '@ttrmz/react-utils'

export default function Home() {
  const { t, i18n } = useTranslation()
  const { switchTheme } = useThemeSwitcher()
  const [lang, setLang] = React.useState(i18n.language)

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  const handleSwitchLang = event => {
    stopEvent(event)
    const newLang = lang.toLowerCase().includes('fr') ? 'en' : 'fr'
    setLang(newLang)
    i18n.changeLanguage(newLang)
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
      </ButtonContainer>
    </HomeWrapper>
  )
}
