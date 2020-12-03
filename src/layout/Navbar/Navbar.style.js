import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 6vh;
  display: none;
  justify-content: center;
  position: sticky;
  top: 0;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary.base};
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-bottom: 1px solid #d6d4d4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 999;

  @media ${devices.tablet} {
    display: flex;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
`

export const NavItem = styled.a`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  transition: 0.5s ease;
  position: relative;

  :hover {
    transform: translateY(1px);
  }
`

export const SumCart = styled.span`
  position: absolute;
  top: 16px;
  left: 11px;
  border-radius: 36px;
  background: ${({ theme }) => theme.colors.error.base};
  padding: 2px 4px;
  font-size: 8px;
  color: ${({ theme }) => theme.colors.primary.light};
`
