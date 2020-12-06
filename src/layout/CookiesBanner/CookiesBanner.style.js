import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const CookiesBannerContainer = styled.div`
  width: 100vw;
  min-height: 128px;
  background-color: ${({ theme }) => theme.colors.primary.base};
  color: ${({ theme }) => theme.colors.primary.light};
  position: fixed;
  font-weight: bold;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  bottom: 0;

  @media ${devices.laptopL} {
    min-height: 64px;
  }
`

export const CookiesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;

  button {
    margin: 1em auto;
    width: 20vw;
    min-width: 150px;
    color: ${({ theme }) => theme.colors.primary.light};
  }

  span {
    text-align: justify;
  }

  @media ${devices.laptop} {
    span {
      text-align: center;
      line-height: 1.5;
    }
  }
  @media ${devices.laptopL} {
    display: block;
    button {
      width: 10vw;
      margin-left: 1em;
    }
  }
`
