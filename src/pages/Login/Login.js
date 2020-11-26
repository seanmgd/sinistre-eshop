import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Login() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('login'))
  }, [])

  return <PageTitle>{t('login')}</PageTitle>
}
