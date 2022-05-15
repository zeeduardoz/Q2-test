import Breadcrumb from '@components/Breadcrumb'
import Navbar from '@components/Navbar'

import { Container, Footer, PageTitle } from './styles'

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
      {/* <Head>
        <title>Q2Panel - {title}</title>
      </Head> */}
      <Container>
        <Navbar />
        <Breadcrumb data={breadcrumb_data} />
        <PageTitle>{title}</PageTitle>

        {children}

        <Footer>
          Developed by <a href='http://joselopes.me'>@zeeduardoz</a> for test company Q2Pay.
        </Footer>
      </Container>
    </>
  )
}

export default Layout
