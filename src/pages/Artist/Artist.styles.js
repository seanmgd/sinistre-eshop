import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: inherit;
    div {
      margin: 1em;
    }
  }
  @media ${devices.laptopL} {
    div {
      margin: 2em;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  background-position: center;
  background-color: black;
  background-image: url('${props => props.image}');
  background-size: cover;

  @media ${devices.tablet} {
    width: 50%;
    height: 70vh;
  }
  @media ${devices.laptop} {
    width: 35%;
  }
  @media ${devices.laptopL} {
    width: 25%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  margin: 0 2em;
  p {
    display: block;
    text-align: justify;
    font-size: 1.2em;
  }
  div {
    display: flex;
    align-items: center;
    height: auto;
    margin: 1em 0;
    h1 {
      font-size: 2em;
    }
    svg {
      font-size: 1.5em;
    }
    span {
      margin-left: 8px;
    }
  }

  @media ${devices.tablet} {
    width: 50%;
    height: 70vh;
    div {
      margin: 0;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      h1 {
        margin-left: -3px;
        margin-top: -8px;
        font-size: 4em;
      }
      span {
        margin: 1em 0;
      }
    }
  }

  @media ${devices.laptop} {
    width: 35%;
    div {
      h1 {
        font-size: 5em;
      }
    }
  }
  @media ${devices.laptopL} {
    width: 25%;
  }
`

export const IconContainer = styled.span`
  display: flex;
  svg {
    transition: 1s ease;
    :hover {
      transform: translateY(2px);
    }
  }

  @media ${devices.tablet} {
    font-size: 1.5em;
  }
`

export const ArtistIcon = styled.svg`
  margin-right: 0.5em;
  color: ${({ theme }) => theme.colors.primary.base};
`
