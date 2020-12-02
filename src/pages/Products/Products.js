import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProducts } from '../../services/products/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container, CardsContainer } from '../../layout/Layout/Container'

export default function Products() {
  const { t } = useTranslation()
  const products = useProducts()

  React.useEffect(() => {
    setPageTitle(t('products'))
  }, [t])

  return (
    <Container>
      <CardsContainer>
        {products.map(product => (
          <CardItem
            key={product.id}
            label={product.name}
            imgUrl={product.image_url}
            to={`/product/${product.slug}`}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}
