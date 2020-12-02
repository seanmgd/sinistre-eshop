import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const SocialMediaWrapper = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  border-right: 1px solid ${({ theme }) => theme.colors.black.dark};
`

export const SocialMediaMotto = styled.div`
  text-align: center;
  font-size: 17px;
  @media ${devices.laptopL} {
    padding: 0 15px 0 15px;
  }
`

export const IconsWrapper = styled.div`
  padding: 15px 15px 0 15px;
  @media ${devices.laptopL} {
    padding: 35px 30px 0 30px;
  }

  display: flex;
  justify-content: space-between;
`
