import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'
import { setPageTitle } from '../../utils/setPageTitle'
import { useCartContext } from '../../contexts/cart'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { stopEvent } from '@ttrmz/react-utils'
import {
  Container,
  EmptyCart,
  Content,
  Grid,
  Overview,
  InfoOverwiew,
  ActionOverview,
  ProductImage,
  IncrementButton,
} from './Cart.styles'

export default function Cart() {
  const { t } = useTranslation()
  const { cart } = useCartContext()
  const handleClear = event => {
    stopEvent(event)
    localStorage.removeItem('sinistre_cart')
    window.location.reload()
  }

  React.useEffect(() => {
    setPageTitle(t('cart'))
  }, [t])

  let cartValues = Object.values(cart.map(e => [e.price, e.qty]))
  let totalPrice = 0
  for (let i of cartValues) {
    totalPrice += i[0] * i[1]
  }
  console.log(cart)

  const handleAddQty = productId => {
    console.log(productId)

    let cartIndex = cart.findIndex(e => e.id === productId)

    console.log('Before update: ', cart[cartIndex])

    cart[cartIndex].qty = String(parseInt(cart[cartIndex].qty) + 1)

    console.log('After update: ', cart[cartIndex])

    console.log('New cart', cart) //Tristan -> il faut mettre a jour ce Cart en utilisant le ./contexts/cart.js
  }

  const handleRemoveQty = (event, product) => {
    console.log(product)
  }
  return (
    <Container>
      {cart.length !== 0 ? (
        <>
          <PageTitle>{t('cart')}</PageTitle>
          <Content>
            <Grid>
              {cart.map(product => (
                <ul>
                  <li>
                    <Link to={`/product/${product.slug}`}>
                      <ProductImage image={product.image} />{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                  </li>
                  <li>{product.price} €</li>
                  <li>
                    {t('qty')}: {product.qty}
                  </li>
                  <li>
                    {t('size')}: {product.size}
                  </li>
                  <li>Total: {product.price * product.qty} €</li>
                  <IncrementButton>
                    <Button
                      size="large"
                      onClick={() => handleAddQty(product.id)}
                    >
                      +
                    </Button>
                    <Button
                      size="large"
                      color="error"
                      onClick={handleRemoveQty}
                    >
                      -
                    </Button>
                  </IncrementButton>
                </ul>
              ))}
            </Grid>
            <Overview>
              <InfoOverwiew>
                <div>
                  Total {t('products')} <span> {cart.length} </span>
                </div>
                <div>
                  Total {t('checkout')} <span>{totalPrice} €</span>
                </div>
              </InfoOverwiew>
              <hr />
              <ActionOverview>
                <Button size="x-large">
                  <Link to="/checkout">{t('checkout')}</Link>
                </Button>
                <Button size="x-large" color="grey" onClick={handleClear}>
                  {t('clear')}
                </Button>
              </ActionOverview>
            </Overview>
          </Content>
        </>
      ) : (
        <EmptyCart>
          <Link to="/products">
            <span>😱</span>
            {t('empty_cart')}
          </Link>
        </EmptyCart>
      )}
    </Container>
  )
}
