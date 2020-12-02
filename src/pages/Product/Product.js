import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProduct } from '../../services/products/query'
import { useCartContext } from '../../contexts/cart'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { stopEvent } from '@ttrmz/react-utils'
import {
  Container,
  Content,
  ImagesContainer,
  OtherImageContainer,
  MainImage,
  OtherImage,
  InfoContainer,
  InputStyled,
  SizeContainer,
  Action,
} from './Product.styles'

export default function Product({ productSlug }) {
  const { t } = useTranslation()
  const [isActive, setActive] = React.useState(0)
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

  const { name, description, image_url, images_url, price } = useProduct(
    productSlug,
  )

  const { cart, addCart } = useCartContext()

  const SIZE = {
    1: 'S',
    2: 'M',
    3: 'L',
    4: 'XL',
  }

  const handleAddCart = event => {
    stopEvent(event)
    if (isActive !== 0) {
      const sizeSelected = SIZE[isActive]
      const productId = `${productSlug}-${sizeSelected}`
      let cartValues = Object.values(cart.map(e => e.id))
      let alreadyStored = false
      for (let key of cartValues) {
        if (key.includes(productId)) {
          alreadyStored = true
        }
      }
      if (!alreadyStored) {
        addCart({
          id: productId,
          slug: productSlug,
          qty: formControls.controls.number.value,
          size: sizeSelected,
          image: image_url,
          name: name,
          price: price,
        })
      }
    }
  }
  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  return (
    <Container>
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
              <button
                onClick={() => setActive(1)}
                className={isActive === 1 && 'selected'}
              >
                S
              </button>
              <button
                onClick={() => setActive(2)}
                className={isActive === 2 && 'selected'}
              >
                M
              </button>
              <button
                onClick={() => setActive(3)}
                className={isActive === 3 && 'selected'}
              >
                L
              </button>
              <button
                onClick={() => setActive(4)}
                className={isActive === 4 && 'selected'}
              >
                XL
              </button>
            </div>
          </SizeContainer>
          <Action>
            <div>
              {t('qty')}
              <InputStyled>
                <Input
                  value={formControls.controls.number.value}
                  inputElementProps={formControls.controls.number.elementConfig}
                  onChange={event => inputChangedHandler(event, 'number')}
                />
              </InputStyled>
            </div>
            <Button color="primary" size="large" onClick={handleAddCart}>
              {t('add_cart')}
            </Button>
          </Action>
        </InfoContainer>
      </Content>
    </Container>
  )
}
