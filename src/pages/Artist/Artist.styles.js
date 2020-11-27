import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  display: flex;
  margin: 2em;
  align-items: flex-start;
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
  height:40vh;
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
  width: 100%;
  height: inherit;
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
    p {
      font-size: 2em;
    }
    svg {
      font-size: 1.5em;
    }
    span {
      margin-left: 1em;
    }
  }
  
  @media ${devices.tablet} { 
    width: 50%;
    height: inherit;
    div {
      margin: 0;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      p {
        margin-left: -3px;
        font-size: 4em;
      }
      span {
        margin 1em 0;
      }
    }
  }
  
  @media ${devices.laptop} {
    width: 35%; 
    div {
      margin: 0;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      p {
        margin-left: -3px;
        font-size: 5em;
      }
      span {
        margin 1em 0;
      }
    }
  }
  @media ${devices.laptopL} {
    width: 25%; 
    div {
      margin: 0;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      p {
        margin-left: -3px;
        font-size: 5em;
      }
      span {
        margin 1em 0;
      }
    }
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
