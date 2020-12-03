import React from 'react'
import { useTranslation } from 'react-i18next'
import { Loader, TextError } from '../../components'
import { useVideo } from '../../services/videos/query'
import { setPageTitle } from '../../utils/setPageTitle'
import { VideoFrame, VideoWrapper } from './Video.styles'

export default function Video({ videoSlug }) {
  const { t } = useTranslation()
  const { video, isOffline, isLoader } = useVideo(videoSlug)

  const { name, link } = video

  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  if (isLoader) {
    return <Loader />
  }

  return (
    <VideoWrapper>
      {isOffline ? (
        <TextError errorMsg={t('errorOffline')} />
      ) : (
        <VideoFrame title={name} src={link} allow="fullscreen" />
      )}
    </VideoWrapper>
  )
}
