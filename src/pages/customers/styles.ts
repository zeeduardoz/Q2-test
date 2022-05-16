import styled from 'styled-components'

export const Container = styled.div``

export const WrapperHeadTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;

  margin-bottom: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const NoData = styled.p`
  font-family: 'Poppins Medium';
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.primary};
`
