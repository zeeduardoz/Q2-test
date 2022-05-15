import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: grid;
  grid-template-columns: 70% 30%;
  gap: 32px;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition: all 0.4;

  &:hover {
    opacity: 0.7;
  }
`

export const NavIcon = styled.div`
  & path {
    stroke: ${({ theme }) => theme.text.secondary};
  }
`

export const NavName = styled.p`
  font-family: 'Poppins Medium';
  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.text.secondary};
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const UtilsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const IconWrapper = styled.div`
  position: relative;

  & div {
    position: absolute;
    top: 1px;
    right: -1px;
    height: 8px;
    width: 8px;

    background: ${({ theme }) => theme.others.red};

    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.background.primary};
  }

  & path {
    stroke: ${({ theme }) => theme.background.primary};
    fill: ${({ theme }) => theme.text.primary};
  }
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  background: ${({ theme }) => theme.background.secondary};
  padding 6px 16px;
  border-radius: 8px;

  cursor: pointer;

  & path {
    stroke: ${({ theme }) => theme.text.primary};
  }
`

export const AccountImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;

  margin-right: 16px;

  border-radius: 100px;
`

export const AccountName = styled.p`
  font-family: 'Poppins Medium';
  font-size: 14px;
  line-height: 22px;

  color: ${({ theme }) => theme.text.primary};
`
