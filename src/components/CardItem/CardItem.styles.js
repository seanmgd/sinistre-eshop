import styled from 'styled-components'

const FONTSIZES = {
  small: '12px',
  medium: '16px',
  large: '20px',
  'x-large': '24px',
}

const getColor = (color, theme) => {
  const colorMapping = {
    black: theme.colors.black.base,
    grey: theme.colors.grey.base,
    'dark-grey': theme.colors.grey.dark,
    'light-grey': theme.colors.grey.light,
  }

  return colorMapping[color]
}

export const ImgCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 30%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  :hover {
    background-image: none;
    background-color: ${({ hoverColor, theme }) => getColor(hoverColor, theme)};
  }

  :after {
    content: '';
    color: ${({ labelColor, theme }) => getColor(labelColor, theme)};
    font-size: ${({ size }) => FONTSIZES[size]};
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover:after {
    content: ${({ label }) => `"${label}"`};
  }
`
