import styled from 'styled-components'

export const RowDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  :nth-last-child(2) {
    padding-top: 8px;
    text-align: right;
    span:first-child {
      font-weight: 700;
    }
  }
  :last-child {
    margin: 0;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
    font-size: 18px;
    font-weight: 700;
  }
`
