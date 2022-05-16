import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import DataTable, { TableColumn } from 'react-data-table-component'

import Button from '@components/Button'
import Input from '@components/Input'
import Layout from '@components/Layout'
import Pagination from '@components/Pagination'
import TableCustom from '@components/TableCustom'

import { useCustomers } from '@contexts/customers'
import { withSSRAuth } from '@hooks/withSSRAuth'

import FilterIcon from '@assets/icons/filter.svg'
import SearchIcon from '@assets/icons/search.svg'

import CreateCustomer from './components/CreateCustomer'
import UpdateCustomer from './components/UpdateCustomer'
import { Container, NoData, WrapperHeadTable } from './styles'

const Customers: NextPage = () => {
  const { customers, getCustomers } = useCustomers()
  const [isCreate, setCreate] = useState(false)
  const [isUpdate, setUpdate] = useState(false)
  const [searchText, setSearch] = useState('')
  const [customerData, setCustomerData] = useState<number | null>(null)

  useEffect(() => {
    getCustomers(searchText)
  }, [searchText])

  const breadcrumb = [
    { name: 'Q2Panel', href: '/' },
    { name: 'Clientes', href: '/customers' },
    { name: 'Listagem', href: '/customers' },
  ]

  const columns: TableColumn<any>[] = [
    {
      name: 'Cliente',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Documento',
      selector: (row) => row.document,
      sortable: true,
    },
    {
      name: 'Banco',
      selector: (row) => row.bank.bankName,
      sortable: true,
    },
    {
      name: 'Agencia',
      selector: (row) => row.bank.agency,
    },
    {
      name: 'Numero da Conta',
      selector: (row) => row.bank.account,
    },
    {
      name: 'Ação',
      selector: (row) => (
        <FilterIcon
          onClick={() => {
            setCustomerData(row.id)
            setUpdate(true)
          }}
        />
      ),
    },
  ]

  return (
    <Layout title='Clientes' breadcrumb_data={breadcrumb}>
      <Container>
        <CreateCustomer visible={isCreate} onClose={() => setCreate(false)} />
        <UpdateCustomer customerData={customerData} visible={isUpdate} onClose={() => setUpdate(false)} />

        {customers && (
          <TableCustom>
            <WrapperHeadTable>
              <Button title='Novo' variant='primary' width={10} onClick={() => setCreate(true)} />
              <Input
                name='search'
                id='search'
                placeholder='Pesquise aqui...'
                value={searchText}
                iconLeft={<SearchIcon />}
                onChange={(e) => setSearch(e.target.value)}
              />
            </WrapperHeadTable>
            <DataTable
              title='Customers'
              columns={columns}
              data={customers}
              noDataComponent={<NoData>Nenhum registro encontrado.</NoData>}
              pagination
              paginationPerPage={10}
              paginationComponent={Pagination}
              noHeader
              responsive
            />
          </TableCustom>
        )}
      </Container>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})

export default Customers
