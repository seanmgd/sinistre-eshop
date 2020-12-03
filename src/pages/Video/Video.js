import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideo } from '../../services/videos/query'
import styled from 'styled-components'
import { Loader } from '../../components/Loader'
import { TextError } from '../../components/TextError'
import { useTranslation } from 'react-i18next'

export default function Video({ videoSlug }) {
  const { video, isOffline, isLoader } = useVideo(videoSlug)
  const { name, link } = video
  const { t } = useTranslation()
  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  if (isLoader) {
    return <Loader />
  }
  return (
    <Container>
      {isOffline ? (
        <TextError errorMsg={t('errorOffline')} />
      ) : (
        <Iframe title={name} src={link} allow="fullscreen" />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 83vh;
`
const Iframe = styled.iframe`
  width: inherit;
  height: inherit;
`
