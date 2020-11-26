import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 64px;
  display: none;
  justify-content: space-between;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey.light};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media ${devices.tablet} {
    display: flex;
  }
`

export const NavItem = styled.a`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.colors.grey.dark};
  font-weight: bold;
  align-items: center;
  justify-content: center;
`
