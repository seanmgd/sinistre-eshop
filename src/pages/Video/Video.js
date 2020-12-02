import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideo } from '../../services/videos/query'
import styled from 'styled-components'

export default function Video({ videoSlug }) {
  const { name, link } = useVideo(videoSlug)

  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  return (
    <Container>
      <Iframe title={name} src={link} allow="fullscreen" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 93vh;
  width: 100vw;
`
const Iframe = styled.iframe`
  width: inherit;
  height: inherit;
`
