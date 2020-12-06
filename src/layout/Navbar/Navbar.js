import React from 'react'
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
  const productsSum = cart.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
  const isAuth = user.token
  const [active, setActive] = React.useState('home')

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
            <NavItem
              as={Link}
              to={route.path}
              key={route.path}
              onClick={() => setActive(route.name)}
              className={active === route.name ? 'active' : ''}
            >
              {route.name
                ? t(route.name)
                : cart.length !== 0 && (
                    <>
                      <FontAwesomeIcon icon={route.icon} />
                      <SumCart>{productsSum}</SumCart>
                    </>
                  )}
            </NavItem>
          ))}
        </Container>
      </StyledNavbar>
      <Burger />
    </>
  )
}
