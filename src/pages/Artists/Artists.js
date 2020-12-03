import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtists } from '../../services/artists/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container, CardsContainer } from '../../layout/Layout/Container'
import { Loader } from '../../components/Loader'
import { TextError } from '../../components/TextError'

export default function Artists() {
  const { t } = useTranslation()
  const { artists, isLoader, isOffline } = useArtists()

  React.useEffect(() => {
    setPageTitle(t('artists'))
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
          {artists.map(artist => (
            <CardItem
              key={artist.id}
              label={artist.name}
              imgUrl={artist.image_url}
              to={`/artist/${artist.slug}`}
            />
          ))}
        </CardsContainer>
      )}
    </Container>
  )
}
