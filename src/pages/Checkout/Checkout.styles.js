import styled from 'styled-components'
import { devices } from '../../constants/devices'
import { Button } from '../../components/Button'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em;
  @media ${devices.tablet} {
    flex-direction: row;
    padding: 5em 1em;
  }
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary.base};
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

export const CouponDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  span {
    font-size: 18px;
  }
`

export const InputCoupon = styled.div`
  display: flex;
  margin-top: 8px;
  input {
    width: 60%;
    border-right: 0px;
    text-transform: uppercase;
    font-size: 1.5em;
  }
`

export const ButtonCoupon = styled(Button)`
  width: 40%;
  text-align: center;
  margin-left: -3px;
  background: ${({ theme }) => theme.colors.primary.base};
  color: ${({ theme }) => theme.colors.primary.light};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const SecurityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  font-style: italic;
  @media ${devices.tablet} {
    align-items: center;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`
export const SecurityImage = styled.div`
  display: none;
`

export const CardElementWrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary.base};
`

export const StyledP = styled.p`
  margin: 12px 0;
  @media ${devices.tablet} {
    text-align: justify;
    margin: 0 6px;
  }
  @media ${devices.laptop} {
    margin: 0 12px 0 0;
  }
`

export const Title = styled.p`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`
