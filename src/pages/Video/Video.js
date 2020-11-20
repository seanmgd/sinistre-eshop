import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'

export default function Video() {
    const { t } = useTranslation()

    React.useEffect(() => {
        setPageTitle(t('video'))
    }, [])

    return <PageTitle>{t('video')}</PageTitle>
}
