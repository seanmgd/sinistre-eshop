import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideos } from '../../services/videos/query'

export default function Videos() {
  const { t } = useTranslation()
  const results = useVideos()

  React.useEffect(() => {
    setPageTitle(t('videos'))
  }, [])

  return (
    <>
      <PageTitle>{t('videos')}</PageTitle>
      {results.map(result => (
        <p key={result.id}>
          name : {result.name} | slug : {result.slug} | link : {result.link} |
          image_url : {result.image_url} | created_at : {result.created_at}
        </p>
      ))}
    </>
  )
}
