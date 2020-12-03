import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProducts } from '../../services/products/query'
import CardItem from '../../components/CardItem/CardItem'
import { Container, CardsContainer } from '../../layout/Layout/Container'
import { TextError } from '../../components/TextError'
import { Loader } from '../../components/Loader'

export default function Products() {
  const { t } = useTranslation()
  const { products, isLoader, isOffline } = useProducts()

  React.useEffect(() => {
    setPageTitle(t('products'))
  }, [t])

  if (isLoader) {
    return <Loader />
  }
  return (
    <Container>
      {isOffline ? (
        <TextError errorMsg={t('errorOffline')} />
      ) : (
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
      )}
    </Container>
  )
}
