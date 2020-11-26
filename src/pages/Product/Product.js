import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Product() {
    const { t } = useTranslation()

    React.useEffect(() => {
        setPageTitle(t('product'))
    }, [])

    return <PageTitle>{t('product')}</PageTitle>
}