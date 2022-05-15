import type { NextPage } from 'next'

import Layout from '@components/Layout'

import { withSSRAuth } from '@hooks/withSSRAuth'

const CreateCustomer: NextPage = () => {
  const breadcrumb = [
    { name: 'Q2Panel', href: '/' },
    { name: 'Clientes', href: '/customers' },
    { name: 'Novo Cliente', href: '/customers/create' },
  ]

  return (
    <Layout title='Nova Conta' breadcrumb_data={breadcrumb}>
      <></>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})

export default CreateCustomer
