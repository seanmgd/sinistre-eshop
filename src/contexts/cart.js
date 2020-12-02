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
          ({ id, size }) => id === product.id && size === product.size,
        )

        if (!!alreadyStoredProduct) {
          return [
            ...prev.filter(
              ({ id, size }) => id !== product.id && size !== product.size,
            ),
            product,
          ]
        }

        return [...prev, product]
      })
    },
    [setCart],
  )
  const values = React.useMemo(
    () => ({
      cart,
      addToCart,
    }),
    [cart, addToCart],
  )

  return <CartContext.Provider value={values} {...rest} />
}
