import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 128px;
  background-color: ${({ theme }) => theme.colors.black.light};
  color: ${({ theme }) => theme.colors.black.dark};
  position: static;
  bottom: 0;
  display: none;
  flex-direction: row;

  @media ${devices.tablet} {
    display: flex;
  }
`

export const FooterColumn = styled.div`
  width: 25vw;
  padding: 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.black.dark};
`

export const ColumnTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
`

export const ColumnList = styled.ul`
  padding: 10px;
  li {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
