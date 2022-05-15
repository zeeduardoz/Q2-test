import { useEffect } from 'react'

import type { NextPage } from 'next'

import Layout from '@components/Layout'

import { useCustomers } from '@contexts/customers'
import { withSSRAuth } from '@hooks/withSSRAuth'

import { Container } from './styles'

const Customers: NextPage = () => {
  const breadcrumb = [
    { name: 'Q2Panel', href: '/' },
    { name: 'Clientes', href: '/customers' },
    { name: 'Listagem', href: '/customers' },
  ]

  const { customers, getCustomers } = useCustomers()

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <Layout title='Clientes' breadcrumb_data={breadcrumb}>
      <Container></Container>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})

export default Customers
