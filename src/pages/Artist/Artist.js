import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { UseArtists } from '../../services/artists/query'

export default function Artist() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('artists'))
  }, [])

  const results = UseArtists()

  return (
    <>
      <PageTitle>{t('artists')}</PageTitle>
      {results.map(result => (
        <p key={result.id}>
          name : {result.name} | slug : {result.slug} | description :
          {result.description} | fb_link : {result.fb_link}| ig_link :
          {result.ig_link} | sc_link : {result.sc_link} | yt_link :
          {result.yt_link}| vimeo_link : {result.vimeo_link} | image_url :
          {result.image_url} | created_at : {result.created_at}
        </p>
      ))}
    </>
  )
}
