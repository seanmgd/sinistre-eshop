import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProducts } from '../../services/products/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container } from '../../layout/Layout/Container'

export default function Products() {
  const { t } = useTranslation()
  const products = useProducts()

  React.useEffect(() => {
    setPageTitle(t('products'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {products.map(product => (
        <CardItem
          key={product.id}
          label={product.name}
          imgUrl={product.image_url}
          to={`/product/${product.slug}`}
        />
      ))}
    </Container>
  )
}
