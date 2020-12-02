import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5em 0;
  @media ${devices.tablet} {
    padding: 5em;
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
    align-items: flex-end;
    width: 75%;
  }
  @media ${devices.laptop} {
    width: auto;
    flex-direction: row;
    align-items: baseline;
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
    li,
    button {
      margin: 0 0.5em;
      :last-child {
        margin-right: 0;
      }
    }
    li {
      width: 20%;
      :first-child {
        display: none;
      }
      :nth-last-child(2) {
        display: none;
      }
    }
  }

  @media ${devices.tablet} {
    ul {
      li {
        margin: 0 1em;
        :first-child {
          display: block;
        }
      }
    }
  }
  @media ${devices.laptop} {
    ul {
      margin: 2em;
      li {
        :first-child {
          display: block;
        }
        :nth-last-child(2) {
          display: block;
          width: 25%;
        }
      }
    }
  }
`

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  width: 100%;
  padding: 2em 3em;
  margin-top: 2em;
  border: 1px solid black;
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
    width: inherit;
  }
  @media ${devices.laptop} {
    margin: 0;
    padding: 2em;
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

export const ActionOverview = styled.div`
  display: flex;
  margin-top: 0.5em;
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
