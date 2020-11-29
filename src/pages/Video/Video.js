import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideo } from '../../services/videos/query'

export default function Video({ videoSlug }) {
  const { name, slug, link, image_url, created_at } = useVideo(videoSlug)

  React.useEffect(() => {
    setPageTitle(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <p>
      name : {name} | slug : {slug} | link : {link} | image_url : {image_url} |
      created_at : {created_at}
    </p>
  )
}
