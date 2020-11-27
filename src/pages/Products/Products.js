import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProducts } from '../../services/products/query'

export default function Products() {
  const { t } = useTranslation()
  const results = useProducts()

  React.useEffect(() => {
    setPageTitle(t('products'))
  }, [])

  return (
    <>
      <PageTitle>{t('products')}</PageTitle>
      {results.map(result => (
        <p key={result.id}>
          name : {result.name} | slug : {result.slug} | description :
          {result.description} | image_url : {result.image_url} | images_url :{' '}
          {result.images_url} | price :{result.price} | created_at :{' '}
          {result.created_at}
        </p>
      ))}
    </>
  )
}
