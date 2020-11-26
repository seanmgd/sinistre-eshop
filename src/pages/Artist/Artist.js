import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Artist() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('artists'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <PageTitle>{t('artists')}</PageTitle>
}
