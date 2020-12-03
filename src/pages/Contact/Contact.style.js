import styled from 'styled-components'
import { PageTitle } from '../../components/PageTitle'
import { motion } from 'framer-motion'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContact = styled.div`
  max-width: 500px;
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const Title = styled(PageTitle)`
  align-self: center;
`

export const MessageConfirm = styled(motion.p)`
  align-self: center;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black.base};
  margin-top: 12px;
  opacity: 0;
`
