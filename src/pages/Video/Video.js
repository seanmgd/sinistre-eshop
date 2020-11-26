import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { UseVideos } from '../../services/videos/query'

export default function Video() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('videos'))
  }, [])

  const results = UseVideos()

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
