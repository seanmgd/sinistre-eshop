import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Account() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('account'))
  }, [t])

  return <PageTitle>{t('account')}</PageTitle>
}
