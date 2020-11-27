import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProducts } from '../../services/products/query'

export default function Products() {
  const { t } = useTranslation()
  const products = useProducts()

  React.useEffect(() => {
    setPageTitle(t('products'))
  }, [])

  return (
    <>
      <PageTitle>{t('products')}</PageTitle>
      {products.map(product => (
        <p key={product.id}>
          name : {product.name} | slug : {product.slug} | description :
          {product.description} | image_url : {product.image_url} | images_url :{' '}
          {product.images_url} | price :{product.price} | created_at :{' '}
          {product.created_at}
        </p>
      ))}
    </>
  )
}
