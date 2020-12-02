import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Dashboard() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('dashboard'))
  }, [t])

  return <PageTitle>{t('dashboard')}</PageTitle>
}
