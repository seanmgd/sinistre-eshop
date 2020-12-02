import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Circle
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 1 }}
      />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
`
const Circle = styled(motion.span)`
  display: block;
  width: 100px;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.grey.base};
  border-top: 3px solid ${({ theme }) => theme.colors.black.base};
  border-radius: 50%;
`
