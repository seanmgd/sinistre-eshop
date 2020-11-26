import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../utils/setPageTitle'
import { UseProducts } from '../../services/products/query'

export default function Product() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('products'))
  }, [])

  const results = UseProducts()

  return (
    <>
      <PageTitle>{t('products')}</PageTitle>
      {results.map(result => (
        <p key={result.id}>
          name : {result.name} | slug : {result.slug} | description :
          {result.description} | image_url : {result.image_url} | price :
          {result.price} | created_at : {result.created_at}
        </p>
      ))}
    </>
  )
}
