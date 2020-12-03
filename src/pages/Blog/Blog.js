import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Blog() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('blog'))
  }, [t])

  return <PageTitle>{t('blog')}</PageTitle>
}
