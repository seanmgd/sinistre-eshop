import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  align-items: baseline;

  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5em 0;
  @media ${devices.laptop} {
    padding: 5em;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  a {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 21px;
    text-align: center;
    span {
      font-size: 128px;
      padding-bottom: 64px;
    }

    @media ${devices.tablet} {
      font-size: 32px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin: 3em 0;
  width: 95%;

  @media ${devices.tablet} {
    align-items: center;
    width: 100%;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 80%;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    li {
      font-size: 12px;
      margin: 0 0.5em;
      :first-child {
        display: none;
      }
      :nth-child(2) {
        width: 25%;
      }
      :nth-last-child(2) {
        display: none;
      }
    }
  }

  @media ${devices.tablet} {
    ul {
      border-radius: 4px;
      box-shadow: 14px 19px 19px -14px #8f868696;
      padding-right: 16px;
      transition: 0.5s ease;
      margin: 0 1em 1em;
      border: 1px solid #c8c6c670;
      :hover {
        transform: translateY(2px);
      }
      li {
        font-size: inherit;
        margin: 0 1em;
        :first-child {
          display: block;
          width: auto;
          margin: 0;
        }
        :nth-child(2) {
          width: 13%;
        }
      }
    }
  }
  @media ${devices.laptop} {
    margin-right: 2em;
  }
`

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  width: 100%;
  padding: 2em 3em;
  margin-top: 2em;
  border: 1px solid ${({ theme }) => theme.colors.primary.base};
  border-radius: 4px;
  div {
    span {
      display: block;
      font-size: 1.5em;
      margin: 0.2em;
    }
  }
  hr {
    margin: 1.5em 0;
  }
  @media ${devices.mobileM} {
    padding: 2em 5em;
  }
  @media ${devices.tablet} {
    margin-top: 2em;
    width: 50%;
    border: 1px solid #c8c6c670;
    box-shadow: 14px 19px 19px -14px #8f868696;
    transition: 0.5s ease;
    :hover {
      transform: translateY(2px);
    }
  }
  @media ${devices.laptop} {
    width: inherit;
    margin: 0;
    padding: 2em;
  }
`

export const ProductImage = styled.div`
  @media ${devices.tablet} {
    background-image: url('${props => props.image}');
    background-position: center;
    background-size: cover;
    height: 100px;
    width: 200px;
  }
`

export const InfoOverwiew = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${devices.tablet} {
    justify-content: space-between;
  }
  @media ${devices.laptop} {
    flex-direction: column;
    div {
      :first-child {
        margin-bottom: 1em;
      }
    }
  }
`

export const IncrementButton = styled.div`
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

export const ActionOverview = styled.div`
  display: flex;
  justify-content: center;
  button {
    :first-child {
      margin-right: 1em;
    }
  }
  @media ${devices.tablet} {
    justify-content: center;
    button {
      font-size: 1em;
    }
  }
`
