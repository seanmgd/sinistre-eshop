import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useProduct } from '../../services/products/query'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
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
    console.log(formControls.controls.number.value)
  }

  const { id, name, description, image_url, images_url, price } = useProduct(
    productSlug,
  )

  React.useEffect(() => {
    setPageTitle(name)
  }, [name])

  return (
    <Container>
      <Content>
        <ImagesContainer>
          <OtherImageContainer>
            {images_url?.map(image => (
              <OtherImage image={image} alt="" />
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
            <Button color="primary" size="large">
              {t('add_cart')}
            </Button>
          </Action>
        </InfoContainer>
      </Content>
    </Container>
  )
}
