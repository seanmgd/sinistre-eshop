import { Link } from '@reach/router'
import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { useCartContext } from '../../contexts/cart'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  CartEmpty,
  CartOverview,
  CartOverviewActions,
  CartOverviewInfos,
  CartProducts,
  CartSummary,
  CartWrapper,
} from './Cart.styles'
import { CartItem } from './CartItem'

export default function Cart() {
  const { t } = useTranslation()
  const { cart, clearCart } = useCartContext()

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

  return (
    <CartWrapper>
      {cart.length !== 0 ? (
        <>
          <PageTitle>{t('cart')}</PageTitle>

          <CartSummary>
            <CartProducts>
              {cart.map(product => (
                <CartItem product={product} key={product.id} />
              ))}
            </CartProducts>

            <CartOverview>
              <CartOverviewInfos>
                <div>
                  Total {t('products')} <span> {productsSum} </span>
                </div>
                <div>
                  Total {t('checkout')} <span>{priceSum} €</span>
                </div>
              </CartOverviewInfos>

              <hr />

              <CartOverviewActions>
                <Button size="x-large">
                  <Link to="/checkout">{t('checkout')}</Link>
                </Button>

                <Button size="x-large" color="grey" onClick={handleClear}>
                  {t('clear')}
                </Button>
              </CartOverviewActions>
            </CartOverview>
          </CartSummary>
        </>
      ) : (
        <CartEmpty>
          <Link to="/products">
            <span>😱</span>
            {t('empty_cart')}
          </Link>
        </CartEmpty>
      )}
    </CartWrapper>
  )
}
