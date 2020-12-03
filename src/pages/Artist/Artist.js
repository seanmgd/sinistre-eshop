import React from 'react'
import { setPageTitle } from '../../utils/setPageTitle'
import { useArtist } from '../../services/artists/query'
import { Container } from '../../layout/Layout/Container'
import {
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
import { Loader } from '../../components/Loader'
import { TextError } from '../../components/TextError'
import { useTranslation } from 'react-i18next'

library.add(faFacebook, faSoundcloud, faVimeoV, faYoutube, faInstagram)

export default function Artist({ artistSlug }) {
  const { t } = useTranslation()
  const { artist, isLoader, isOffline } = useArtist(artistSlug)
  const {
    name,
    description,
    image_url,
    fb_link,
    sc_link,
    vimeo_link,
    yt_link,
    ig_link,
  } = artist

  React.useEffect(() => {
    setPageTitle(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  if (isLoader) {
    return <Loader />
  }
  return isOffline ? (
    <TextError errorMsg={t('errorOffline')} />
  ) : (
    <Container>
      <ImageContainer image={image_url} />
      <InfoContainer>
        <div>
          <h1>{name}</h1>
          <IconContainer>
            <a href={fb_link} target="_blank" rel="noreferrer">
              <ArtistIcon as={FontAwesomeIcon} icon={faFacebook} />
            </a>
            <a href={yt_link} target="_blank" rel="noreferrer">
              <ArtistIcon as={FontAwesomeIcon} icon={faYoutube} />
            </a>
            <a href={sc_link} target="_blank" rel="noreferrer">
              <ArtistIcon as={FontAwesomeIcon} icon={faSoundcloud} />
            </a>
            <a href={vimeo_link} target="_blank" rel="noreferrer">
              <ArtistIcon as={FontAwesomeIcon} icon={faVimeoV} />
            </a>
            <a href={ig_link} target="_blank" rel="noreferrer">
              <ArtistIcon as={FontAwesomeIcon} icon={faInstagram} />
            </a>
          </IconContainer>
        </div>
        <p>{description}</p>
      </InfoContainer>
    </Container>
  )
}
