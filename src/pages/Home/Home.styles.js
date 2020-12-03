import styled from 'styled-components'
import { Container } from '../../layout/Layout/Container'
import { devices } from '../../constants/devices'

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 5em;
  @media ${devices.tablet} {
    font-size: 5em;
  }
`
export const CustomContainer = styled(Container)`
  flex-direction: column;
  div {
    button {
      margin: 0 1em;
    }
  }
`
