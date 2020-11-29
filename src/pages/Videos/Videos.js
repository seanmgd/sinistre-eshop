import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideos } from '../../services/videos/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container } from '../../layout/Layout/Container'

export default function Videos() {
  const { t } = useTranslation()
  const videos = useVideos()

  React.useEffect(() => {
    setPageTitle(t('videos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {videos.map(video => (
        <CardItem
          key={video.id}
          label={video.name}
          imgUrl={video.image_url}
          to={`/video/${video.slug}`}
        />
      ))}
    </Container>
  )
}
