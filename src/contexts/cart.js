import { useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'

const LOCAL_STORAGE_CART_KEY = 'sinistre_cart'
const LOCAL_STORAGE_CART_INITIAL_STATE = []

const CartContext = React.createContext({})

export function useCartContext() {
  return React.useContext(CartContext)
}

export function CartContextProvider({ value, ...rest }) {
  const [cart, setCart] = useLocalStorage(
    LOCAL_STORAGE_CART_KEY,
    LOCAL_STORAGE_CART_INITIAL_STATE,
  )

  const addToCart = React.useCallback(
    product => {
      setCart(prev => {
        const [alreadyStoredProduct] = prev.filter(
          ({ id }) => id === product.id,
        )

        if (!!alreadyStoredProduct) {
          return [...prev.filter(({ id }) => id !== product.id), product]
        }

        return [...prev, product]
      })
    },
    [setCart],
  )

  const updateCart = React.useCallback(
    product => {
      setCart(prev => {
        if (Math.sign(product.qty) === 0) {
          //If quantity is 0, then remove the product in the cart
          prev.splice(
            cart.findIndex(e => e.id === product.id),
            1,
          )

          window.location.reload() //TR Find better alternative
          return prev
        }
        return [...prev.filter(({ id }) => id !== product.id), product]
      })
    },
    [setCart, cart],
  )
  const values = React.useMemo(
    () => ({
      cart,
      addToCart,
      updateCart,
    }),
    [cart, addToCart, updateCart],
  )

  return <CartContext.Provider value={values} {...rest} />
}
