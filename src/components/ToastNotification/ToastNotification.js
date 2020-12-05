import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from '@reach/router'
import { Button } from '../Button'
import { devices } from '../../constants/devices'

export function ToastNotification({
  textNotification,
  buttonLink,
  buttonText,
}) {
  const [animate, setAnimate] = React.useState('animated')

  React.useEffect(() => {
    setTimeout(() => {
      setAnimate('animatedClose')
    }, 3000)
  }, [])

  return (
    <Container variants={variantToast} initial="initial" animate={animate}>
      <Text>
        {textNotification}
        {buttonText.length !== 0 && (
          <Link to={buttonLink}>
            <Button color="revPrimary" size="medium" fontSize="medium">
              {buttonText}
            </Button>
          </Link>
        )}
      </Text>
    </Container>
  )
}

ToastNotification.propTypes = {
  textNotification: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}

ToastNotification.defaultProps = {
  textNotification: 'This is a notification example',
  buttonLink: '',
  buttonText: '',
}

const variantToast = {
  initial: { opacity: 0, transition: { duration: 1 } },
  animated: { opacity: 1, transition: { duration: 0.5 } },
  animatedClose: { opacity: 0, transition: { duration: 1 } },
}

const Container = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary.base};
  position: absolute;
  overflow: hidden;
  border-bottom-left-radius: 4px;
  top: 40vh;
  width: 100%;
  text-align: center;
  @media ${devices.tablet} {
    width: auto;
    top: 6vh;
    right: 0;
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 16px;
  padding: 16px;
  a {
    margin-left: 16px;
  }
`
