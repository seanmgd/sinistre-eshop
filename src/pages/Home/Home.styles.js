import styled from 'styled-components'
import { devices } from '../../constants/devices'
import { Container } from '../../layout/Layout/Container'

export const HomeWrapper = styled(Container)`
  flex-direction: column;
  div {
    button {
      margin: 0 1em;
    }
  }
`

export const HomeTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 5em;
  @media ${devices.tablet} {
    font-size: 5em;
  }
`
