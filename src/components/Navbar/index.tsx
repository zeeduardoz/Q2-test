import Link from 'next/link'

import Line from '@components/Line'

import { useAccount } from '@contexts/account'

import BellIcon from '@assets/icons/bell.svg'
import AccountsIcon from '@assets/icons/building-bank.svg'
import CalendarIcon from '@assets/icons/calendar.svg'
import ChevronDownIcon from '@assets/icons/chevron-down.svg'
import DashboardIcon from '@assets/icons/triangle-square-circle.svg'

import {
  AccountContainer,
  AccountImage,
  AccountName,
  Container,
  IconWrapper,
  LeftContainer,
  NavContainer,
  NavIcon,
  NavItem,
  NavName,
  RightContainer,
  UtilsContainer,
  Wrapper,
} from './styles'

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

const Navbar = () => {
  const { account } = useAccount()
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <NavContainer>
            {nav.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <NavItem>
                    <NavIcon>{item.icon}</NavIcon>
                    <NavName>{item.name}</NavName>
                  </NavItem>
                </Link>
              )
            })}
          </NavContainer>
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
            <ChevronDownIcon />
          </AccountContainer>
        </RightContainer>
      </Wrapper>
      <Line />
    </Container>
  )
}

export default Navbar
