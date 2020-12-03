import { NavItem, StyledNavbar, Container, SumCart } from './Navbar.style'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Burger } from './Burger'
import { useUserContext } from '../../contexts/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../contexts/cart'

export const Navbar = () => {
  const { t } = useTranslation()
  const { user } = useUserContext()
  const { cart } = useCartContext()
  console.log(cart)
  const productsSum = cart.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
  const isAuth = user.token

  const ROUTES = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'videos',
      path: '/videos',
    },
    {
      name: 'products',
      path: '/products',
    },
    {
      name: 'artists',
      path: '/artists',
    },
    {
      name: isAuth ? 'logout' : 'login',
      path: isAuth ? '/logout' : '/login',
    },
    {
      path: '/cart',
      icon: faShoppingCart,
    },
  ]

  return (
    <>
      <StyledNavbar>
        <Container>
          {ROUTES.map(route => (
            <NavItem as={Link} to={route.path} key={route.path}>
              {route.name ? (
                t(route.name)
              ) : (
                <div>
                  <FontAwesomeIcon icon={route.icon} />
                  {route.path === '/cart' && cart.length !== 0 && (
                    <SumCart>{productsSum}</SumCart>
                  )}
                </div>
              )}
            </NavItem>
          ))}
        </Container>
      </StyledNavbar>
      <Burger />
    </>
  )
}
