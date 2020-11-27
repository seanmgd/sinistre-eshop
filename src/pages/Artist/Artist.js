import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtist } from '../../services/artists/query'

export default function Artist(artistSlug) {
  const { t } = useTranslation()
  const {
    name,
    slug,
    description,
    image_url,
    fb_link,
    sc_link,
    vimeo_link,
    yt_link,
    ig_link,
    created_at,
  } = useArtist(artistSlug)

  React.useEffect(() => {
    setPageTitle(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <p>
      name : {name} | slug : {slug} | description : {description} | fb_link :{' '}
      {fb_link} | sc_link : {sc_link} | vimeo_link : {vimeo_link} | yt_link :{' '}
      {yt_link} | ig_link : {ig_link} | image_url : {image_url} | created_at :{' '}
      {created_at}
    </p>
  )
}
