import { NavItem, StyledNavbar } from './Navbar.style'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Burger } from './Burger'

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
    name: 'login',
    path: '/login',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <>
      <StyledNavbar>
        {ROUTES.map(route => (
          <NavItem as={Link} to={route.path} key={route.path}>
            {t(route.name)}
          </NavItem>
        ))}
      </StyledNavbar>
      <Burger />
    </>
  )
}

Navbar.ROUTES = ROUTES
