import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useTranslation } from 'react-i18next'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { Button } from '../../components/Button'
import { CustomContainer, Title } from './Home.styles'

export default function Home() {
  const { t } = useTranslation()
  const { switchTheme } = useThemeSwitcher()

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  return (
    <CustomContainer>
      <Title>{t('welcome')}</Title>
      <Button onClick={switchTheme}>{t('switch')}</Button>
    </CustomContainer>
  )
}
