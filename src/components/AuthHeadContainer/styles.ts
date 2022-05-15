import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h1`
  font-family: 'Poppins Bold';
  font-size: 28px;
  line-height: 36px;

  color: ${({ theme }) => theme.text.primary};
`

export const Description = styled.p`
  font-family: 'Poppins Medium';
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.text.primary};
`
