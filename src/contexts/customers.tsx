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

export type CustomersContextProps = {
  customers: CustomersProps | null
  getCustomers: () => Promise<void>
}

type CustomersProviderProps = {
  children: ReactNode
}

export const CustomersContext = createContext({} as CustomersContextProps)

export function CustomersProvider({ children }: CustomersProviderProps) {
  const [customers, setCustomers] = useState<CustomersProps | null>(null)

  const getCustomers = async () => {
    try {
      const { data } = await api.get('bankAccounts')
      setCustomers(data)
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  return (
    <CustomersContext.Provider
      value={{
        customers,
        getCustomers,
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
