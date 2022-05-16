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

export const HeadContainer = styled.div`
  margin-top: 40px;
`

export const PageTitle = styled.h1`
  font-family: 'Poppins SemiBold';
  font-size: 20px;
  line-height: 28px;

  color: ${({ theme }) => theme.text.primary};
`

export const Footer = styled.div`
  margin-top: 42px;
  padding: 16px 0;

  font-family: 'Poppins Regular';
  font-size: 12px;
  line-height: 20px;
  text-align: center;

  color: ${({ theme }) => theme.text.secondary};

  a {
    color: ${({ theme }) => theme.text.primary};
    font-family: 'Poppins Medium';
  }
`
