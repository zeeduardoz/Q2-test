import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Line from '@components/Line'

import { useAccount } from '@contexts/account'

import BellIcon from '@assets/icons/bell.svg'
import AccountsIcon from '@assets/icons/building-bank.svg'
import CalendarIcon from '@assets/icons/calendar.svg'
import ChevronRightIcon from '@assets/icons/chevron-right.svg'
import MenuIcon from '@assets/icons/menu.svg'
import DashboardIcon from '@assets/icons/triangle-square-circle.svg'

import {
  AccountContainer,
  AccountImage,
  AccountName,
  Container,
  IconWrapper,
  LeftContainer,
  MenuButton,
  NavContainerDesktop,
  NavContainerMobile,
  NavIcon,
  NavItem,
  NavName,
  RightContainer,
  UtilsContainer,
  Wrapper,
} from './styles'

type NavbarProps = {
  active: string
}

const nav = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <DashboardIcon />,
  },
  {
    name: 'Clientes',
    href: '/customers',
    icon: <AccountsIcon />,
  },
]

const Navbar = ({ active }: NavbarProps) => {
  const router = useRouter()
  const { account, pushSignOut } = useAccount()
  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <NavContainerDesktop>
            {nav.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <NavItem>
                    <NavIcon active={active === item.name}>{item.icon}</NavIcon>
                    <NavName active={active === item.name}>{item.name}</NavName>
                  </NavItem>
                </Link>
              )
            })}
          </NavContainerDesktop>
          <MenuButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </MenuButton>
          <NavContainerMobile visible={isOpen} onClose={() => setOpen(false)}>
            {nav.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <NavItem>
                    <NavIcon active={active === item.name}>{item.icon}</NavIcon>
                    <NavName active={active === item.name}>{item.name}</NavName>
                  </NavItem>
                </Link>
              )
            })}
          </NavContainerMobile>
        </LeftContainer>
        <RightContainer>
          <UtilsContainer>
            <IconWrapper>
              <CalendarIcon />
              <div />
            </IconWrapper>
            <IconWrapper>
              <BellIcon />
              <div />
            </IconWrapper>
          </UtilsContainer>
          <AccountContainer>
            <AccountImage src={account ? account.avatar : ''} alt='Account Image' />
            <AccountName>{account ? account.firstName : ''}</AccountName>
            <ChevronRightIcon
              onClick={() => {
                pushSignOut()
                router.push('/auth/login')
              }}
            />
          </AccountContainer>
        </RightContainer>
      </Wrapper>
      <Line />
    </Container>
  )
}

export default Navbar
