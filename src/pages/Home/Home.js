import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('home'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <PageTitle>{t('home')}</PageTitle>
}
