import { StyledBurger, StyledUl } from './Burger.style'
import React from 'react'
import { Navbar } from './Navbar'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const Burger = () => {
  const [open, setOpen] = React.useState(false)

  const { t } = useTranslation()

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledUl open={open}>
        {Navbar.ROUTES.map(route => (
          <li key={route.name}>
            <Link to={route.path} key={route.name}>
              {t(route.name)}
            </Link>
          </li>
        ))}
      </StyledUl>
    </>
  )
}
