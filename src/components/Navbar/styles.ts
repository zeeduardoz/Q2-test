import styled from 'styled-components'

import SidebarNav from '@components/SidebarNav'

export const Container = styled.div``

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: grid;
  grid-template-columns: 70% 27.5%;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 10% 80%;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const MenuButton = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    cursor: pointer;
    & path {
      fill: ${({ theme }) => theme.others.blue};
    }
  }
`

export const NavContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const NavContainerMobile = styled(SidebarNav)`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
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

export const NavIcon = styled.div<{ active: boolean }>`
  & path {
    stroke: ${({ active, theme }) => (active ? theme.others.blue : theme.text.secondary)};
  }
`

export const NavName = styled.p<{ active: boolean }>`
  font-family: 'Poppins Medium';
  font-size: 12px;
  line-height: 20px;

  color: ${({ active, theme }) => (active ? theme.others.blue : theme.text.secondary)};
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
  padding 2px 16px;
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
  border: 3px solid ${({ theme }) => theme.types.success};
`

export const AccountName = styled.p`
  font-family: 'Poppins Medium';
  font-size: 14px;
  line-height: 22px;

  color: ${({ theme }) => theme.text.primary};
`
