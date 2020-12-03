import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import { useCartContext } from '../../contexts/cart'
import axios from 'axios'
import {
  Container,
  ShippingDetails,
  Form,
  InfoDetails,
  OrderDetails,
  SecurityDetails,
  SecurityImage,
  CouponDetails,
  InputCoupon,
  ButtonCoupon,
  cardElementOptions,
  CardElementWrapper,
  StyledP,
  Title,
} from './Checkout.styles'
import security from '../../styles/img/security-icon.png'
import { checkValidity } from '../../utils/checkFormValidity'
import { renderForm } from '../../utils/renderForm'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Paypal from '../../components/Paypal/Paypal'
import CheckoutDetails from '../../components/CheckoutDetails/CheckoutDetails'

export default function Checkout() {
  const { t } = useTranslation()

  // const [formControls, setFormControls] = React.useState({
  //   controls: {
  //     email: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'email',
  //         placeholder: t('mail_address'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //         isEmail: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     firstname: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('firstname'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     lastname: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('lastname'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     line: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('complete_address'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     city: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('city'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     zipcode: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('zip_code'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //     country: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: t('country'),
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //       },
  //       valid: false,
  //       touched: false,
  //     },
  //   },
  // })
  // const [processing, setProcessingTo] = React.useState(false)
  // const [checkoutError, setCheckoutError] = React.useState()
  //
  // const stripe = useStripe()
  // const elements = useElements()
  //
  // const formElements = []
  // for (let key in formControls.controls) {
  //   formElements.push({
  //     id: key,
  //     config: formControls.controls[key],
  //   })
  // }
  //
  // const inputChangedHandler = (event, controlName) => {
  //   const updatedControls = {
  //     ...formControls.controls,
  //     [controlName]: {
  //       ...formControls.controls[controlName],
  //       value: event.target.value,
  //       valid: checkValidity(
  //         event.target.value,
  //         formControls.controls[controlName].validation,
  //       ),
  //       touched: true,
  //     },
  //   }
  //   setFormControls({ controls: updatedControls })
  // }
  //
  // /*const handleCardDetailsChange = ev => {
  //   ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  // }
  //
  // const paymentHandler = async event => {
  //   event.preventDefault()
  //   const billingDetails = {
  //     email: formControls.controls.email.value,
  //     firstname: formControls.controls.firstname.value,
  //     lastname: formControls.controls.lastname.value,
  //     address: {
  //       line: formControls.controls.line.value,
  //       country: formControls.controls.country.value,
  //       postal_code: formControls.controls.zipcode.value,
  //     },
  //   }
  //
  //   setProcessingTo(true)
  //
  //   const cardElement = elements.getElement('card')
  //
  //   try {
  //     const { data: clientSecret } = await axios.post(
  //       '/services/payment_intents/payment_intents',
  //       {
  //         amount: price * 100,
  //       },
  //     )
  //
  //     const paymentMethodReq = await stripe.createPaymentMethod({
  //       type: 'card',
  //       card: cardElement,
  //       billing_details: billingDetails,
  //     })
  //
  //     if (paymentMethodReq.error) {
  //       setCheckoutError(paymentMethodReq.error.message)
  //       setProcessingTo(false)
  //       return
  //     }
  //
  //     const { error } = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: paymentMethodReq.paymentMethod.id,
  //     })
  //
  //     if (error) {
  //       setCheckoutError(error.message)
  //       setProcessingTo(false)
  //       return
  //     }
  //
  //     alert('yoiupi')
  //   } catch (err) {
  //     setCheckoutError(err.message)
  //   }
  // }*/

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
        {/*<Title>{t('shipping_details')}</Title>*/}
        {/*<Form>{renderForm(formElements, inputChangedHandler)}</Form>*/}
        <Title>{t('checkout_details')}</Title>
        {/*<CardElementWrapper>*/}
        {/*  <CardElement options={cardElementOptions} />*/}
        {/*</CardElementWrapper>*/}
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
          <SecurityImage image={security} alt="security" />
        </SecurityDetails>
      </InfoDetails>
    </Container>
  )
}
