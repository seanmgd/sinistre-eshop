import React from 'react'
import { RowDetails } from '../../components/CheckoutDetails/CheckoutDetails.styles'

function CheckoutDetails({ productName, productPrice, productQty, children }) {
  return (
    <RowDetails>
      {productName && productQty && (
        <span>
          {productName} x {productQty}
        </span>
      )}
      {productPrice && <span>{productPrice} €</span>}
      {children}
    </RowDetails>
  )
}

export default CheckoutDetails
