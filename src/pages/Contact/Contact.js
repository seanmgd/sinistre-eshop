import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Contact() {
    const { t } = useTranslation()

    React.useEffect(() => {
        setPageTitle(t('contact'))
    }, [])

    return <PageTitle>{t('contact')}</PageTitle>
}
