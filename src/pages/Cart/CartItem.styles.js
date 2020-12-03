import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const CartItemImage = styled.div`
@media ${devices.tablet} {
  background-image: url('${props => props.image}');
  background-position: center;
  background-size: cover;
  height: 100px;
  width: 200px;
}
`

export const CartItemActions = styled.div`
  display: flex;

  button:last-child {
    margin-left: 8px;
  }

  @media ${devices.tablet} {
    button:last-child {
      margin: 0 8px;
    }
  }
`
