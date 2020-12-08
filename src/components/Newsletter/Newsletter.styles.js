import styled from 'styled-components'
import { devices } from '../../constants/devices'

export const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5em 0;
  width: 100%;
  height: 20vh;
  background-color: ${({ theme }) => `${theme.colors.primary.base}`};
`

export const NewsletterText = styled.p`
  color: ${({ theme }) => `${theme.colors.primary.light}`};
  font-size: 14px;
  width: 100%;
  text-align: center;
  padding: 0 8px;

  @media ${devices.tablet} {
    padding: 0;
    font-size: 18px;
    width: 60%;
  }
  @media ${devices.laptop} {
    width: 45%;
  }
  @media ${devices.laptopL} {
    width: 30%;
  }
`

export const NewsletterForm = styled.div`
  display: flex;
  width: 80%;
  margin: 18px 0;

  @media ${devices.tablet} {
    width: 50%;
    font-size: 1.5em;
  }
  @media ${devices.laptop} {
    width: 40%;
  }
  @media ${devices.laptopL} {
    width: 30%;
  }
  @media ${devices.desktop} {
    width: 20%;
  }
  input {
    border: ${({ theme }) => theme.colors.grey.light};
    border-radius: 4px;
    padding: 12px 14px;
    width: 70%;
    &:focus {
      border-color: ${({ theme }) => `${theme.colors.grey.dark}`};
    }
    background-color: ${({ touched, theme, invalid }) =>
      invalid && touched && `${theme.colors.error.light}`};
  }

  button {
    width: 30%;
    text-align: center;
    background: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.base};
    border-radius: 4px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-color: ${({ theme }) => theme.colors.grey.light};
    height: 49px;
    padding: 12px 14px;
    margin: 0;
    margin-left: -3px;
  }
`

export const StatusMessage = styled.span`
  color: ${({ theme }) => `${theme.colors.primary.light}`};
  text-align: center;
  line-height: 21px;
  padding: 0 8px;

  @media ${devices.tablet} {
    font-size: 18px;
    padding: 0;
  }
`
