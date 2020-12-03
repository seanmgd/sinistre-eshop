import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faInstagram,
  faSoundcloud,
  faVimeoV,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Loader, TextError } from '../../components'
import { Container } from '../../layout/Layout/Container'
import { useArtist } from '../../services/artists/query'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  ArtistDetails,
  ArtistIcon,
  ArtistImage,
  ArtistSocials,
} from './Artist.styles'

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
  }, [name])

  if (isLoader) {
    return <Loader />
  }

  const socials = [
    { icon: faFacebook, link: fb_link },
    { icon: faYoutube, link: yt_link },
    { icon: faSoundcloud, link: sc_link },
    { icon: faVimeoV, link: vimeo_link },
    { icon: faInstagram, link: ig_link },
  ]

  return isOffline ? (
    <TextError errorMsg={t('errorOffline')} />
  ) : (
    <Container>
      <ArtistImage image={image_url} />

      <ArtistDetails>
        <div>
          <h1>{name}</h1>

          <ArtistSocials>
            {socials.map(({ link, icon }) => (
              <a key={link} href={link} target="_blank" rel="noreferrer">
                <ArtistIcon as={FontAwesomeIcon} icon={icon} />
              </a>
            ))}
          </ArtistSocials>
        </div>
        <p>{description}</p>
      </ArtistDetails>
    </Container>
  )
}
