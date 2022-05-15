import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const PageTitle = styled.h1`
  font-family: 'Poppins SemiBold';
  font-size: 20px;
  line-height: 28px;

  color: ${({ theme }) => theme.text.primary};

  margin: 28px 0;
`

export const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-family: 'Poppins Regular';
  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.text.secondary};

  a {
    color: ${({ theme }) => theme.text.primary};
    font-family: 'Poppins Medium';
  }
`
