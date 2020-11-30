import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    height: 50vh;
  }
  @media ${devices.laptop} {
    height: 70vh;
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  height: inherit;

  @media ${devices.tablet} {
    width: 55vw;
  }
  @media ${devices.laptop} {
    width: 50vw;
  }
  @media ${devices.laptopL} {
    width: 35vw;
  }
`

export const MainImage = styled.div`
  display: flex;
  width: 100%;
  background-position: center;
  background-color: black;
  background-image: url('${props => props.image}');
  background-size: cover;
  @media ${devices.tablet} {
    margin: 0 52px 0 14px;
    width: 66%;
    height: inherit;
  }
`

export const OtherImageContainer = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    width: 30%;
    justify-content: space-between;
    flex-direction: column;
  }
`

export const OtherImage = styled.div`
  display: flex;
  background-position: center;
  background-color: black;
  background-size: cover;
  background-image: url('${props => props.image}');
  margin: 0 !important;
  height: 49%; 
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  margin: 0 2em;
  h1 {
    font-size: 27px;
    text-align: center;
    margin: 0.5em 0;
  }
  p {
    display: block;
    text-align: justify;
    font-size: 1.2em;
  }

  @media ${devices.tablet} {
    width: 35%;
    height: inherit;
    margin: 0;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;
    h1 {
      text-align: left;
      margin: -6px 0 0.5em;
    }
  }

  @media ${devices.laptop} {
    width: 25%;
    h1 {
      font-size: 3em;
    }
  }
  @media ${devices.laptopL} {
    width: 18%;
  }
  @media ${devices.desktop} {
    width: 15%;
  }
`

export const InputStyled = styled.span`
  margin: 0 16px 0 8px;
  width: 45px;
  input {
    text-align: center;
    height: 45px;
  }
`

export const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 16px 0;
  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-right: 8px;
  }
  div {
    button {
      font-size: 12px;
      padding: 8px 10px;
      margin-left: 8px;
      border: 1px solid ${({ theme }) => theme.colors.primary.base};
      cursor: pointer;

      :hover {
        color: ${({ theme }) => theme.colors.primary.light};
        background: ${({ theme }) => theme.colors.primary.base};
      }

      &.selected {
        color: ${({ theme }) => theme.colors.primary.light};
        background: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }

  @media ${devices.tablet} {
    h2 {
      font-size: 28px;
    }
  }
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  text-transform: capitalize;
  width: 100%;
  font-size: 18px;
  div {
    display: flex;
    align-items: baseline;
  }
`
