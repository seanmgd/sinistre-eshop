import { NavItem, StyledNavbar, Container } from './Navbar.style'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Burger } from './Burger'
import { useUserContext } from '../../contexts/user'

export const Navbar = () => {
  const { t } = useTranslation()
  const { user } = useUserContext()
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
      name: 'contact',
      path: '/contact',
    },
  ]

  return (
    <>
      <StyledNavbar>
        <Container>
          {ROUTES.map(route => (
            <NavItem as={Link} to={route.path} key={route.path}>
              {t(route.name)}
            </NavItem>
          ))}
        </Container>
      </StyledNavbar>
      <Burger />
    </>
  )
}
