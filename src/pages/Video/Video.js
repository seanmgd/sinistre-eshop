import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useVideo } from '../../services/videos/query'
import styled from 'styled-components'
import { PageTitle } from '../../components/PageTitle'
import { devices } from '../../constants/devices'

export default function Video({ videoSlug }) {
  const { name, slug, link, image_url, created_at } = useVideo(videoSlug)

  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  return (
    <DivContainer>
      <Title>{name}</Title>
      <VideoStyle title={name} src={link} allow="fullscreen" />
    </DivContainer>
  )
}

const DivContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled(PageTitle)`
  align-self: center;
`

const VideoStyle = styled.iframe`
  margin-top: 12px;
  align-self: center;
  @media ${devices.mobileS} {
    width: 310px;
    height: 300px;
  }
  @media ${devices.mobileM} {
    width: 370px;
    height: 300px;
  }
  @media ${devices.mobileL} {
    width: 425px;
    height: 300px;
  }
  @media ${devices.tablet} {
    width: 700px;
    height: 500px;
  }
  @media ${devices.laptop} {
    width: 1000px;
    height: 500px;
  }
`
