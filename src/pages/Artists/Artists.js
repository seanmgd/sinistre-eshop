import React from 'react'
import { useTranslation } from 'react-i18next'
import { CardItem, Loader, TextError } from '../../components'
import { CardsContainer, Container } from '../../layout/Layout/Container'
import { useArtists } from '../../services/artists/query'
import { setPageTitle } from '../../utils/setPageTitle'

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
