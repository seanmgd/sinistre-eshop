import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Input,
  Loader,
  TextError,
  ToastNotification,
} from '../../components'
import { useCartContext } from '../../contexts/cart'
import { useProduct } from '../../services/products/query'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  Action,
  Container,
  Content,
  ImagesContainer,
  InfoContainer,
  InputStyled,
  MainImage,
  OtherImage,
  OtherImageContainer,
  SizeContainer,
} from './Product.styles'

const SIZES = ['S', 'M', 'L', 'XL']

export default function Product({ productSlug }) {
  const { t } = useTranslation()
  const [activeSize, setActiveSize] = React.useState('')
  const [showCart, setShowCart] = React.useState(false)

  const [formControls, setFormControls] = React.useState({
    controls: {
      number: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          min: '1',
          max: '9',
        },
        value: '1',
      },
    },
  })

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...formControls.controls,
      [controlName]: {
        ...formControls.controls[controlName],
        value: event.target.value,
      },
    }
    setFormControls({ controls: updatedControls })
  }

  const { product, isOffline, isLoader } = useProduct(productSlug)
  const { name, description, image_url, images_url, price } = product

  const { updateCart } = useCartContext()

  const handleAddCart = event => {
    stopEvent(event)
    setShowCart(!showCart)
    if (!!activeSize) {
      const productId = `${productSlug}-${activeSize}`

      updateCart({
        id: productId,
        slug: productSlug,
        qty: formControls.controls.number.value,
        size: activeSize,
        image: image_url,
        name: name,
        price: price,
      })
    }
  }

  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  if (isLoader) {
    return <Loader />
  }
  return (
    <Container>
      {isOffline ? (
        <TextError errorMsg={t('errorOffline')} />
      ) : (
        <Content>
          <ImagesContainer>
            <OtherImageContainer>
              {images_url?.map(image => (
                <OtherImage image={image} alt="image" key={image} />
              ))}
            </OtherImageContainer>

            <MainImage image={image_url} />
          </ImagesContainer>

          <InfoContainer>
            <h1>{name}</h1>

            <p>{description}</p>

            <SizeContainer>
              <h2>{price + ' €'}</h2>
              <div>
                {t('size')}

                {SIZES.map(size => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={activeSize === size ? 'selected' : ''}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </SizeContainer>

            <Action>
              <div>
                {t('qty')}

                <InputStyled>
                  <Input
                    value={formControls.controls.number.value}
                    inputElementProps={
                      formControls.controls.number.elementConfig
                    }
                    onChange={event => inputChangedHandler(event, 'number')}
                  />
                </InputStyled>
              </div>

              <Button
                disabled={!activeSize}
                color="primary"
                size="large"
                onClick={handleAddCart}
              >
                {t('add_cart')}
              </Button>
            </Action>
          </InfoContainer>
          {showCart && (
            <ToastNotification
              textNotification={t('product_added')}
              buttonLink="/cart"
              buttonText={t('see_cart')}
            />
          )}
        </Content>
      )}
    </Container>
  )
}
