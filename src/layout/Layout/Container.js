import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media ${devices.tablet} {
    flex-direction: row;
    padding: 0;
    height: 93vh;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${devices.tablet} {
    flex-direction: row;
  }
  a {
    width: 100%;
    @media ${devices.tablet} {
      padding: 0 1em;
      width: 35%;
    }
    @media ${devices.laptopL} {
      padding: 0 2em;
      width: 25%;
    }
    @media ${devices.desktop} {
      padding: 0 5em;
      width: 25%;
    }
  }
`
