import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Checkout() {
    const { t } = useTranslation()

    React.useEffect(() => {
        setPageTitle(t('checkout'))
    }, [])

    return <PageTitle>{t('checkout')}</PageTitle>
}
