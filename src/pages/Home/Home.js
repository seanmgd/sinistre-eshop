import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useTranslation } from 'react-i18next'
import { useThemeSwitcher } from '../../contexts/themeSwitcher'
import { Button } from '../../components/Button'

export default function Home() {
  const { t } = useTranslation()
  const { switchTheme } = useThemeSwitcher()

  React.useEffect(() => {
    setPageTitle(t('home'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageTitle>{t('home')}</PageTitle>
      <Button onClick={switchTheme}>switch theme</Button>
    </>
  )
}
