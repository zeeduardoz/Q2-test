import React, { createContext, ReactNode, useContext, useState } from 'react'

import { toast } from 'react-toastify'

import api from '@services/http/api'

export type SignInProps = {
  email: string
  password: string
}

export type CustomersProps = {
  id: number
  name: string
  document: string
  bank: {
    bankName: string
    code: string
    agency: string
    account: string
  }
}

export type NewCustomerProps = {
  name: string
  documentType: string
  document: string
  bankName: string
  agency: string
  account: string
}

export type UpdateCustomerProps = {
  name: string
  document: string
  bankName: string
  agency: string
  account: string
}

export type CustomersContextProps = {
  customers: CustomersProps[] | null
  totalPages: number
  getCustomers: (text: string) => Promise<void>
  getCustomer: (id: number) => Promise<CustomersProps>
  updateCustomer: (id: number, data: UpdateCustomerProps) => Promise<void>
  newCustomer: (data: NewCustomerProps) => Promise<void>
}

type CustomersProviderProps = {
  children: ReactNode
}

export const CustomersContext = createContext({} as CustomersContextProps)

export function CustomersProvider({ children }: CustomersProviderProps) {
  const [customers, setCustomers] = useState<CustomersProps[] | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)

  const getCustomers = async (text: string) => {
    try {
      const { data } = await api.get(`bankAccounts?name_like=${text}`)
      setCustomers(data)
      setTotalPages(Math.ceil(data.length / 10))
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  const getCustomer = async (id: number) => {
    try {
      const { data } = await api.get(`bankAccounts/${id}`)
      return data
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  const newCustomer = async (data: NewCustomerProps) => {
    try {
      await api.post('bankAccounts', {
        name: data.name,
        document: data.document,
        bank: {
          bankName: data.bankName,
          code: data.bankName.split(' - ')[0],
          agency: data.agency,
          account: data.account,
        },
      })
      await getCustomers('')

      toast.success('Novo cliente cadastrado.')
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  const updateCustomer = async (id: number, data: UpdateCustomerProps) => {
    try {
      await api.put(`bankAccounts/${id}`, {
        name: data.name,
        document: data.document,
        bank: {
          bankName: data.bankName,
          code: data.bankName.split(' - ')[0],
          agency: data.agency,
          account: data.account,
        },
      })
      await getCustomers('')

      toast.success('Cliente atualizado.')
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  return (
    <CustomersContext.Provider
      value={{
        customers,

        totalPages,

        getCustomers,
        getCustomer,
        updateCustomer,
        newCustomer,
      }}
    >
      {children}
    </CustomersContext.Provider>
  )
}

export function useCustomers() {
  const context = useContext(CustomersContext)
  return context
}
