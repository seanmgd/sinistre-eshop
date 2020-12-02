import {
  ColumnList,
  ColumnTitle,
  FooterColumn,
  FooterWrapper,
} from './Footer.style'
import { SocialMedias } from './SocialMedias'
import { Link } from '@reach/router'
import {useTranslation} from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <SocialMedias />
      <FooterColumn>
        <ColumnTitle>{t('services_clients')}</ColumnTitle>
        <ColumnList>
          <li><Link to={'/'}>{t('contact_us')}</Link></li>
          <li><Link to={'/'}>{t('help')}</Link></li>
        </ColumnList>
      </FooterColumn>
      <FooterColumn>
        <ColumnTitle>{t('discovers')}</ColumnTitle>
        <ColumnList>
          <li><Link to={'/'}>{t('who_are_we')}</Link></li>
          <li><Link to={'/blog'}>{t('blog')}</Link></li>
        </ColumnList>
      </FooterColumn>
      <FooterColumn>
        <ColumnTitle>{t('legal_notices')}</ColumnTitle>
        <ColumnList>
          <li><Link to={'/'}>{t('cookies')}</Link></li>
          <li><Link to={'/'}>{t('terms_of_use')}</Link></li>
        </ColumnList>
      </FooterColumn>
    </FooterWrapper>
  )
}
