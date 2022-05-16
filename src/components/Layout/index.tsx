import Head from 'next/head'

import Breadcrumb from '@components/Breadcrumb'
import Navbar from '@components/Navbar'

import { Container, Footer, HeadContainer, PageTitle } from './styles'

type BreadcrumbProps = {
  name: string
  href: string
}

type LayoutProps = {
  title: string
  breadcrumb_data: BreadcrumbProps[]
  children: React.ReactNode
}

const Layout = ({ title, breadcrumb_data, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Q2Panel - {title}</title>
      </Head>
      <Container>
        <Navbar active={title} />
        <HeadContainer>
          <PageTitle>{title}</PageTitle>
          <Breadcrumb data={breadcrumb_data} />
        </HeadContainer>

        {children}

        <Footer>
          Developed by{' '}
          <a href='http://joselopes.me' target='_blank' rel='noreferrer'>
            @zeeduardoz
          </a>{' '}
          for test company Q2Pay.
        </Footer>
      </Container>
    </>
  )
}

export default Layout
