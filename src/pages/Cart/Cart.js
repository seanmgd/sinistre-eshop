import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  Container,
  Content,
  Grid,
  Overview,
  InfoOverwiew,
  ActionOverview,
} from './Cart.styles'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'

export default function Cart() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('cart'))
  }, [t])

  return (
    <Container>
      <PageTitle>{t('cart')}</PageTitle>
      <Content>
        <Grid>
          <ul>
            <li>Photo</li>
            <li>Hoodie</li>
            <li>24 €</li>
            <li>{t('qty')}: 4</li>
            <li>Total: 96 €</li>
            <ActionOverview>
              <Button size="large">+</Button>
              <Button size="large" color="error">
                -
              </Button>
            </ActionOverview>
          </ul>
          <ul>
            <li>Photo</li>
            <li>Tees Long Sleeves</li>
            <li>24 €</li>
            <li>{t('qty')}: 4</li>
            <li>Total: 96 €</li>
            <ActionOverview>
              <Button size="large">+</Button>
              <Button size="large" color="error">
                -
              </Button>
            </ActionOverview>
          </ul>
        </Grid>
        <Overview>
          <InfoOverwiew>
            <div>
              Total {t('products')} <span> 4 </span>
            </div>
            <div>
              Total {t('checkout')} <span>96 €</span>
            </div>
          </InfoOverwiew>
          <hr />
          <ActionOverview>
            <Button size="x-large">{t('checkout')}</Button>
            <Button size="x-large" color="grey">
              {t('clear')}
            </Button>
          </ActionOverview>
        </Overview>
      </Content>
    </Container>
  )
}
