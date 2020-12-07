import React from 'react'
import { useTranslation } from 'react-i18next'
import { CheckoutDetails, Paypal } from '../../components'
import { useCartContext } from '../../contexts/cart'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  ButtonCoupon,
  Container,
  CouponDetails,
  InfoDetails,
  InputCoupon,
  OrderDetails,
  SecurityDetails,
  ShippingDetails,
  StyledP,
  Title,
} from './Checkout.styles'

export default function Checkout() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('checkout'))
  }, [t])

  const { cart } = useCartContext()
  const priceSum = cart.reduce(
    (acc, curr) => acc + parseInt(curr.qty) * parseInt(curr.price),
    0,
  )
  const totalSum = priceSum + 10

  return (
    <Container>
      <ShippingDetails>
        <Title>{t('checkout_details')}</Title>
        <Paypal total={totalSum} />
      </ShippingDetails>
      <InfoDetails>
        <Title>{t('order')}</Title>
        <OrderDetails>
          {cart.map(product => (
            <CheckoutDetails
              productName={product.name}
              productPrice={product.price * product.qty}
              productQty={product.qty}
              productSize={product.size}
            />
          ))}
          <CheckoutDetails>
            <span>{t('shipping')}</span>
            <span>
              10 € <br />
              <br /> {t('shipping_estimated')} jeudi 23 décembre
            </span>
          </CheckoutDetails>
          <CheckoutDetails>
            <span>Total</span>
            <span>{totalSum} €</span>
          </CheckoutDetails>
        </OrderDetails>
        <CouponDetails>
          <span>{t('coupon')}</span>
          <InputCoupon>
            <input type="text" />
            <ButtonCoupon>{t('apply')}</ButtonCoupon>
          </InputCoupon>
        </CouponDetails>
        <SecurityDetails>
          <StyledP>{t('security')}</StyledP>
        </SecurityDetails>
      </InfoDetails>
    </Container>
  )
}
