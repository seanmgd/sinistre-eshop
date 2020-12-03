import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useTranslation } from 'react-i18next'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { Button } from '../../components/Button'
import { CustomContainer, Title } from './Home.styles'

export default function Home() {
  const { t, i18n } = useTranslation()
  const { switchTheme } = useThemeSwitcher()
  const [isEnglish, setIsEnglish] = React.useState(true)
  const changeLanguage = () => {
    setIsEnglish(!isEnglish)
    i18n.changeLanguage(isEnglish ? 'en' : 'fr')
  }

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  return (
    <CustomContainer>
      <Title>{t('welcome')}</Title>
      <div>
        <Button onClick={switchTheme}>{t('switch_theme')}</Button>
        <Button
          onClick={() => {
            changeLanguage()
          }}
        >
          {t('switch_lang')}
        </Button>
      </div>
    </CustomContainer>
  )
}
