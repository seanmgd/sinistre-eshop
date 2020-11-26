import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { UseProduct } from '../../services/products/query'

export default function Product(productSlug) {
  const { t } = useTranslation()
  const {
    id,
    name,
    slug,
    description,
    image_url,
    images_url,
    price,
    created_at,
  } = UseProduct(productSlug)

  React.useEffect(() => {
    setPageTitle(name)
  }, [])

  return (
    <p>
      name : {name} | slug : {slug} | description : {description} | image_url :{' '}
      {image_url} | images_url : {images_url}| price : {price} | created_at :{' '}
      {created_at}
    </p>
  )
}
