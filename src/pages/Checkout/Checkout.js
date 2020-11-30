import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../utils/setPageTitle'
import {
  Container,
  ShippingDetails,
  Form,
  InfoDetails,
  OrderDetails,
  RowDetails,
  SecurityDetails,
  CouponDetails,
  InputStyled,
} from './Checkout.styles'
import security from '../../styles/img/security-icon.png'
import { Input } from '../../components/Input'

export default function Checkout() {
  const { t } = useTranslation()

  const [formControls, setFormControls] = React.useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: t('mail_address'),
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      firstname: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: t('firstname'),
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      lastname: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: t('lastname'),
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: t('complete_address'),
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: t('city'),
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: t('zip_code'),
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      cardHolder: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'cardHolder',
        },
        value: 'Will be replaced with stripe integration',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      cardNumber: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'cardNumber',
        },
        value: 'Will be replaced with stripe integration',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
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

  React.useEffect(() => {
    setPageTitle(t('checkout'))
  }, [t])

  return (
    <Container>
      <ShippingDetails>
        <h1>{t('shipping_details')}</h1>
        <Form>
          <Input
            inputElementProps={formControls.controls.email.elementConfig}
            onChange={event => inputChangedHandler(event, 'email')}
          />
          <Input
            inputElementProps={formControls.controls.firstname.elementConfig}
            onChange={event => inputChangedHandler(event, 'firstname')}
          />
          <Input
            inputElementProps={formControls.controls.lastname.elementConfig}
            onChange={event => inputChangedHandler(event, 'lastname')}
          />
          <Input
            inputElementProps={formControls.controls.address.elementConfig}
            onChange={event => inputChangedHandler(event, 'address')}
          />
          <Input
            inputElementProps={formControls.controls.city.elementConfig}
            onChange={event => inputChangedHandler(event, 'city')}
          />
          <Input
            inputElementProps={formControls.controls.zipcode.elementConfig}
            onChange={event => inputChangedHandler(event, 'zipcode')}
          />
        </Form>
        <h1>{t('checkout_details')}</h1>
        <Form>
          <Input
            inputElementProps={formControls.controls.cardHolder.elementConfig}
            onChange={event => inputChangedHandler(event, 'cardHolder')}
          />
          <Input
            inputElementProps={formControls.controls.cardNumber.elementConfig}
            onChange={event => inputChangedHandler(event, 'cardNumber')}
          />
        </Form>
      </ShippingDetails>
      <InfoDetails>
        <h1>{t('order')}</h1>
        <OrderDetails>
          <RowDetails>
            <span>Basic hoodie x 1</span>
            <span>30 €</span>
          </RowDetails>
          <RowDetails>
            <span>Tees long sleeves x 2</span>
            <span>60 €</span>
          </RowDetails>
          <RowDetails>
            <span>Basic tee shirt x 3</span>
            <span>70 €</span>
          </RowDetails>
          <RowDetails>
            <span>{t('shipping')}</span>
            <span>
              10 € <br />
              <br /> {t('shipping_estimated')} jeudi 23 décembre
            </span>
          </RowDetails>
          <RowDetails>
            <span>Total</span>
            <span>170 €</span>
          </RowDetails>
        </OrderDetails>
        <CouponDetails>
          <span>{t('coupon')}</span>
          <InputStyled>
            <input type="text" />
            <button>{t('apply')}</button>
          </InputStyled>
        </CouponDetails>
        <SecurityDetails>
          <p>{t('security')}</p>
          <img src={security} alt="security" />
        </SecurityDetails>
      </InfoDetails>
    </Container>
  )
}
