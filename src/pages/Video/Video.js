import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { UseVideo } from '../../services/videos/query'

export default function Video(videoSlug) {
  const { name, slug, link, image_url, created_at } = UseVideo(videoSlug)

  React.useEffect(() => {
    setPageTitle(name)
  }, [])

  return (
    <p>
      name : {name} | slug : {slug} | link : {link} | image_url : {image_url} |
      created_at : {created_at}
    </p>
  )
}
