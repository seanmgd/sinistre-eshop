import styled from 'styled-components'
import { PageTitle } from '../../components/PageTitle'
import { motion } from 'framer-motion'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`

export const FormContact = styled.div`
  max-width: 450px;
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
`

export const Title = styled(PageTitle)`
  align-self: center;
  margin-bottom: 15px;
`

export const MessageConfirm = styled(motion.p)`
  align-self: center;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.black.base};
  margin-top: 12px;
  opacity: 0;
`
