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
      setCart(prev => [...prev.filter(({ id }) => product.id !== id), product])
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
