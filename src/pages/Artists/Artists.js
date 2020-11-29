import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtists } from '../../services/artists/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container } from '../../layout/Layout/Container'

export default function Artists() {
  const { t } = useTranslation()
  const artists = useArtists()

  React.useEffect(() => {
    setPageTitle(t('artists'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {artists.map(artist => (
        <CardItem
          key={artist.id}
          label={artist.name}
          imgUrl={artist.image_url}
          to={`/artist/${artist.slug}`}
        />
      ))}
    </Container>
  )
}
