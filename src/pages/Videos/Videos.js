import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideos } from '../../services/videos/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container, CardsContainer } from '../../layout/Layout/Container'
import { Loader } from '../../components/Loader'
import { TextError } from '../../components/TextError'

export default function Videos() {
  const { t } = useTranslation()
  const { videos, isLoader, isOffline } = useVideos()

  React.useEffect(() => {
    setPageTitle(t('videos'))
  }, [t])

  if (isLoader) {
    return <Loader />
  }
  return (
    <Container>
      {isOffline ? (
        <TextError errorMsg={t('errorOffline')} />
      ) : (
        <CardsContainer>
          {videos.map(video => (
            <CardItem
              key={video.id}
              label={video.name}
              imgUrl={video.image_url}
              to={`/video/${video.slug}`}
            />
          ))}
        </CardsContainer>
      )}
    </Container>
  )
}
