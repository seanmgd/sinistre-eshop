import { useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'
import { useUserContext } from './user'

const LOCAL_STORAGE_CART_KEY = 'sinistre_cart'

const CartContext = React.createContext({})

export function useCartContext() {
  return React.useContext(CartContext)
}

export function CartContextProvider({ value, ...rest }) {
  const { user } = useUserContext()

  const formattedUsername = React.useMemo(
    () => user?.username?.replace(' ', '_'),
    [user],
  )

  const [cart, setCart] = useLocalStorage(LOCAL_STORAGE_CART_KEY, {})

  const addCart = React.useCallback(
    productId => {
      setCart(prev => ({
        ...prev,
        [formattedUsername]: (prev[formattedUsername] || []).includes(productId)
          ? prev[formattedUsername].filter(id => id !== productId)
          : [...(prev[formattedUsername] || []), productId],
      }))
    },
    [formattedUsername, setCart],
  )
  //Tristan -> il faut revoir le addCart et enlever tout le formatted Username please :D
  const values = React.useMemo(
    () => ({
      cart: cart[formattedUsername] || [],
      addCart,
    }),
    [cart, addCart, formattedUsername],
  )

  return <CartContext.Provider value={values} {...rest} />
}
