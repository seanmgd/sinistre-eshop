import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtists } from '../../services/artists/query'

export default function Artists() {
  const { t } = useTranslation()
  const artists = useArtists()

  React.useEffect(() => {
    setPageTitle(t('artists'))
  }, [])

  return (
    <>
      <PageTitle>{t('artists')}</PageTitle>
      {artists.map(artist => (
        <p key={artist.id}>
          name : {artist.name} | slug : {artist.slug} | description :
          {artist.description} | fb_link : {artist.fb_link}| ig_link :
          {artist.ig_link} | sc_link : {artist.sc_link} | yt_link :
          {artist.yt_link}| vimeo_link : {artist.vimeo_link} | image_url :
          {artist.image_url} | created_at : {artist.created_at}
        </p>
      ))}
    </>
  )
}
