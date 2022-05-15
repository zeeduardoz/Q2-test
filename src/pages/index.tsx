import type { NextPage } from 'next'

import Layout from '@components/Layout'

import { withSSRAuth } from '@hooks/withSSRAuth'

const Home: NextPage = () => {
  const breadcrumb = [{ name: 'Q2Panel', href: '/' }]

  return (
    <Layout title='Dashboard' breadcrumb_data={breadcrumb}>
      <></>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})

export default Home
