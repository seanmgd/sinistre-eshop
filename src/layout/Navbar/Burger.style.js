import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  padding: 0 10px;

  @media ${devices.tablet} {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.primary.base};
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.colors.primary.base};
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  li {
    color: ${({ theme }) => theme.colors.primary.light};
    font-weight: bold;
  }

  @media ${devices.tablet} {
    display: none;
  }
`

export const SumCart = styled.span`
  margin-left: 8px;
  border-radius: 36px;
  padding: 4px 7px;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.primary.light};
  background: ${({ theme }) => theme.colors.error.base};
`
