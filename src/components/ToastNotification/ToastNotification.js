import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const ToastNotification = ({ textNotification }) => {
  const [animate, setAnimate] = useState('animated')

  useEffect(() => {
    setTimeout(() => {
      setAnimate('animatedClose')
    }, 3000)
  }, [])

  return (
    <Container variants={variantToast} initial="initial" animate={animate}>
      <Text>{textNotification}</Text>
    </Container>
  )
}

ToastNotification.propTypes = {
  text: PropTypes.string,
}

ToastNotification.defaultProps = {
  text: 'This is a notification example',
}

const variantToast = {
  initial: { opacity: 0, transition: { duration: 1 } },
  animated: { opacity: 1, transition: { duration: 0.5 } },
  animatedClose: { opacity: 0, transition: { duration: 1 } },
}

const Container = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary.base};
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 250px;
  overflow: hidden;
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 16px;
  padding: 16px;
`
export default ToastNotification
