import { ThemeSwitcherProvider } from './contexts/themeSwitcher'
import { UserContextProvider } from './contexts/user'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js/pure'
import { CartContextProvider } from './contexts/cart'

const stripePromise = loadStripe(
  'pk_test_51HeIfaDiHlrwoU8EXe6p33b1rm8602DeYfldWqYbclWbIjvxyYt9ewj51rLzB8uk9U0qJxAjf5YI38EhkLuDzFh700MQ5WLuMz',
)
export function AppProviders({ children }) {
  return (
    <Elements stripe={stripePromise}>
      <ThemeSwitcherProvider>
        <UserContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </UserContextProvider>
      </ThemeSwitcherProvider>
    </Elements>
  )
}
