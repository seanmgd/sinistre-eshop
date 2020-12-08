import styled from 'styled-components'
import { devices } from '../../constants/devices'
import { Container } from '../../layout/Layout/Container'

export const HomeWrapper = styled(Container)`
  flex-direction: column;
`

export const HomeTitle = styled.h1`
  font-size: 2em;
  @media ${devices.tablet} {
    font-size: 5em;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 1em 0;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    button {
      margin: 0 1em;
    }
  }
`
