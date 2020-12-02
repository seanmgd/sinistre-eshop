import {
  IconsWrapper,
  SocialMediaMotto,
  SocialMediaWrapper,
} from './SocialMedias.style'
import theme from '../../styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faSoundcloud,
  faVimeoV,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'

export const SocialMedias = () => {
  const { t } = useTranslation()
  return (
    <SocialMediaWrapper>
      <SocialMediaMotto>{t('footer_social_medias_motto')}</SocialMediaMotto>
      <IconsWrapper>
        <a
          rel={'noreferrer'}
          target={'_blank'}
          href={'https://www.facebook.com/'}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color={theme.light.colors.black.base}
          />
        </a>
        <a
          rel={'noreferrer'}
          target={'_blank'}
          href={'https://soundcloud.com/'}
        >
          <FontAwesomeIcon
            icon={faSoundcloud}
            color={theme.light.colors.black.base}
          />
        </a>
        <a rel={'noreferrer'} target={'_blank'} href={'https://vimeo.com/'}>
          <FontAwesomeIcon
            icon={faVimeoV}
            color={theme.light.colors.black.base}
          />
        </a>
        <a
          rel={'noreferrer'}
          target={'_blank'}
          href={'https://www.youtube.com/'}
        >
          <FontAwesomeIcon
            icon={faYoutube}
            color={theme.light.colors.black.base}
          />
        </a>
        <a
          rel={'noreferrer'}
          target={'_blank'}
          href={'https://www.instagram.com/'}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color={theme.light.colors.black.base}
          />
        </a>
      </IconsWrapper>
    </SocialMediaWrapper>
  )
}
