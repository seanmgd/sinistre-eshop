import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const FooterWrapper = styled.footer`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: static;
    bottom: 0;
    width: 100%;
    height: 9vh;
    color: ${({ theme }) => theme.colors.black.dark};
    background-color: ${({ theme }) => theme.colors.grey.light};
    border-top: 1px solid #d6d4d4;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
  @media ${devices.tablet} {
    display: flex;
  }
`
export const FooterColumn = styled.div`
  margin: 0 48px;
`

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
`

export const ColumnList = styled.ul`
  padding: 8px 0;
  li {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
