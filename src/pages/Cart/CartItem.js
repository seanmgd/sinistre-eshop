import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components'
import { useCartContext } from '../../contexts/cart'
import { CartItemImage, CartItemActions } from './CartItem.styles'

export function CartItem({ product }) {
  const { t } = useTranslation()
  const { updateCart } = useCartContext()

  const handleUpdateQty = (product, increment) => {
    updateCart({ ...product, qty: String(parseInt(product.qty) + increment) })
  }

  return (
    <ul key={product.id}>
      <li>
        <Link to={`/product/${product.slug}`}>
          <CartItemImage image={product.image} />{' '}
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

      <CartItemActions>
        <Button
          size="large"
          onClick={() => handleUpdateQty(product, 1)}
          children="+"
        />

        <Button
          size="large"
          color="error"
          onClick={() => handleUpdateQty(product, -1)}
          children="-"
        />
      </CartItemActions>
    </ul>
  )
}
