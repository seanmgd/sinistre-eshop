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
    <DivContainer variants={variantToast} initial="initial" animate={animate}>
      <Text>{textNotification}</Text>
    </DivContainer>
  )
}

ToastNotification.propTypes = {
  text: PropTypes.string,
}

ToastNotification.defaultProps = {
  text: 'Notificaiton de test',
}

const variantToast = {
  initial: { opacity: 0, y: -10, transition: { duration: 1 } },
  animated: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  animatedClose: { y: 50, opacity: 0, transition: { duration: 1 } },
}

const DivContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.black.base};
  position: absolute;
  top: 20px;
  right: 0;
  width: 150px;
  overflow: hidden;
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey.light};
  font-size: 12px;
  padding: 8px;
`
export default ToastNotification
