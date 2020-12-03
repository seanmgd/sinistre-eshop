import React from 'react'
import { RowDetails } from './CheckoutDetails.styles'

export function CheckoutDetails({
  productName,
  productPrice,
  productQty,
  productSize,
  children,
}) {
  return (
    <RowDetails>
      {productName && productQty && (
        <span>
          {productName} x {productQty} ({productSize})
        </span>
      )}
      {productPrice && <span>{productPrice} €</span>}
      {children}
    </RowDetails>
  )
}
