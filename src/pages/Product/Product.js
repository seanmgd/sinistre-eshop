import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProduct } from '../../services/products/query'
import { PageTitle } from '../../components/PageTitle'
import { Button } from '../../components/Button'
import styled from 'styled-components'

export default function Product({ productSlug }) {
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
  } = useProduct(productSlug)

  React.useEffect(() => {
    setPageTitle(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <DivContainer>
      <DivImage>
        <DivImagesNoFocus>
          {images_url.map(image => (
            <ImageNoFocus src={image} alt="" />
          ))}
        </DivImagesNoFocus>

        <img src={image_url} alt="" />
      </DivImage>
      <DivDescription>
        <PageTitle>{name}</PageTitle>
        <span>{price + ' €'}</span>
        <p>{description}</p>
        <Button color="primary" size="medium">
          Ajouter au panier
        </Button>
      </DivDescription>
    </DivContainer>
  )
}
const DivContainer = styled.div`
  display: flex;
`

const DivImage = styled.div`
  display: flex;
  justify-content: center;
`

const DivDescription = styled.div``

const DivImagesNoFocus = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-between;
`
const ImageNoFocus = styled.img`
  width: 80%;
  align-self: center;
`
