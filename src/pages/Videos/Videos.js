import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideos } from '../../services/videos/query'

export default function Videos() {
  const { t } = useTranslation()
  const videos = useVideos()

  React.useEffect(() => {
    setPageTitle(t('videos'))
  }, [])

  return (
    <>
      <PageTitle>{t('videos')}</PageTitle>
      {videos.map(video => (
        <p key={video.id}>
          name : {video.name} | slug : {video.slug} | link : {video.link} |
          image_url : {video.image_url} | created_at : {video.created_at}
        </p>
      ))}
    </>
  )
}
