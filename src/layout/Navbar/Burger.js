import { StyledBurger, StyledUl } from './Burger.style'
import React from 'react'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '../../contexts/user'

export const Burger = () => {
  const [open, setOpen] = React.useState(false)

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
      path: '/login',
    },
    {
      name: 'contact',
      path: '/contact',
    },
    {
      name: 'blog',
      path: '/blog',
    },
    {
      name: 'cookies',
      path: '/',
    },
    {
      name: 'terms_of_use',
      path: '/',
    },
  ]

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledUl open={open}>
        {ROUTES.map(route => (
          <li key={route.name}>
            <Link
              to={route.path}
              key={route.name}
              onClick={() => setOpen(false)}
            >
              {t(route.name)}
            </Link>
          </li>
        ))}
      </StyledUl>
    </>
  )
}
