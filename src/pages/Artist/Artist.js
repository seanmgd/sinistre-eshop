import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtist } from '../../services/artists/query'
import {
  Container,
  ImageContainer,
  InfoContainer,
  IconContainer,
  ArtistIcon,
} from './Artist.styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faSoundcloud,
  faVimeoV,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faSoundcloud, faVimeoV, faYoutube, faInstagram)

export default function Artist({artistSlug}) {
  const {
    name,
    description,
    image_url,
    fb_link,
    sc_link,
    vimeo_link,
    yt_link,
    ig_link,
  } = useArtist(artistSlug)

  React.useEffect(() => {
    setPageTitle(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <Container>
      <ImageContainer image={image_url} />
      <InfoContainer>
        <div>
          <p>{name}</p>
          <IconContainer>
            <a href={fb_link} target="_blank" rel="noreferrer">
              <ArtistIcon
                as={FontAwesomeIcon}
                icon={faFacebook}
              />
            </a>
            <a href={yt_link} target="_blank" rel="noreferrer">
              <ArtistIcon
                  as={FontAwesomeIcon}
                  icon={faYoutube}
              />
            </a>
            <a href={sc_link} target="_blank" rel="noreferrer">
              <ArtistIcon
                  as={FontAwesomeIcon}
                  icon={faSoundcloud}
              />
            </a>
            <a href={vimeo_link} target="_blank" rel="noreferrer">
              <ArtistIcon
                  as={FontAwesomeIcon}
                  icon={faVimeoV}
              />
            </a>
            <a href={ig_link} target="_blank" rel="noreferrer">
              <ArtistIcon
                  as={FontAwesomeIcon}
                  icon={faInstagram}
              />
            </a>
          </IconContainer>
        </div>
        <p>{description}</p>
      </InfoContainer>
    </Container>
  )
}
