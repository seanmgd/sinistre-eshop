import { Link } from '@reach/router'
import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { useCartContext } from '../../contexts/cart'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  ActionOverview,
  Container,
  Content,
  EmptyCart,
  Grid,
  IncrementButton,
  InfoOverwiew,
  Overview,
  ProductImage,
} from './Cart.styles'

export default function Cart() {
  const { t } = useTranslation()
  const { cart, updateCart, clearCart } = useCartContext()

  const handleClear = event => {
    stopEvent(event)
    clearCart()
  }

  React.useEffect(() => {
    setPageTitle(t('cart'))
  }, [t])

  const productsSum = cart.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
  const priceSum = cart.reduce(
    (acc, curr) => acc + parseInt(curr.qty) * parseInt(curr.price),
    0,
  )

  const handleUpdateQty = (product, increment) => {
    updateCart({ ...product, qty: String(parseInt(product.qty) + increment) })
  }

  return (
    <Container>
      {cart.length !== 0 ? (
        <>
          <PageTitle>{t('cart')}</PageTitle>
          <Content>
            <Grid>
              {cart.map(product => (
                <ul key={product.id}>
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
                      onClick={() => handleUpdateQty(product, 1)}
                    >
                      +
                    </Button>
                    <Button
                      size="large"
                      color="error"
                      onClick={() => handleUpdateQty(product, -1)}
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
                  Total {t('products')} <span> {productsSum} </span>
                </div>
                <div>
                  Total {t('checkout')} <span>{priceSum} €</span>
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
