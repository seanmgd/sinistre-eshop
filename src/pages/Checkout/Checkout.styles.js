import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  height: 93vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em;
  h1 {
    font-size: 2em;
    margin-bottom: 16px;
  }
  @media ${devices.tablet} {
    flex-direction: row;
    padding: 5em 1em;
  }
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.grey.base};
  }
`

export const ShippingDetails = styled.div`
  width: 100%;
  @media ${devices.tablet} {
    width: 45%;
  }
`
export const Form = styled.div`
  margin-bottom: 18px;
  input {
    margin-bottom: 12px;
  }
`

export const InfoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    width: 45%;
  }
`

export const OrderDetails = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.base};
  color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 4px;
`
export const RowDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  :nth-last-child(2) {
    padding-top: 8px;
    text-align: right;
    span:first-child {
      font-weight: 700;
    }
  }
  :last-child {
    margin: 0;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
    font-size: 18px;
    font-weight: 700;
  }
`

export const CouponDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  span {
    font-size: 18px;
  }
`

export const InputStyled = styled.div`
  display: flex;
  margin-top: 8px;
  input {
    width: 60%;
    border-right: 0px;
    text-transform: uppercase;
    font-size: 1.5em;
  }
  button {
    width: 40%;
    text-align: center;
    margin-left: -3px;
    background: ${({ theme }) => theme.colors.primary.base};
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: 18px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export const SecurityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  font-style: italic;
  p {
    margin: 12px 0;
  }
  @media ${devices.tablet} {
    align-items: center;
    p {
      text-align: justify;
      margin: 0 6px;
    }
  }
  @media ${devices.laptop} {
    flex-direction: row;
    p {
      margin: 0 12px 0 0;
    }
  }
`
