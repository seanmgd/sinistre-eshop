import { SocialMedias } from './SocialMedias'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import {
  ColumnList,
  ColumnTitle,
  FooterColumn,
  FooterWrapper,
  Container,
} from './Footer.style'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterWrapper>
      <Container>
        <FooterColumn>
          <ColumnTitle>{t('services_clients')}</ColumnTitle>
          <ColumnList>
            <li>
              <Link to={'/contact'}>{t('contact_us')}</Link>
            </li>
            <li>
              <Link to={'/'}>{t('help')}</Link>
            </li>
          </ColumnList>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>{t('discovers')}</ColumnTitle>
          <ColumnList>
            <li>
              <SocialMedias />
            </li>
            <li>
              <Link to={'/'}>{t('who_are_we')}</Link>
            </li>
          </ColumnList>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>{t('legal_notices')}</ColumnTitle>
          <ColumnList>
            <li>
              <Link to={'/'}>{t('cookies')}</Link>
            </li>
            <li>
              <Link to={'/'}>{t('terms_of_use')}</Link>
            </li>
          </ColumnList>
        </FooterColumn>
      </Container>
    </FooterWrapper>
  )
}
