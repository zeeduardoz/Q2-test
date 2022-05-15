import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { toast } from 'react-toastify'

import api from '@services/http/api'
import { getStorage, removeStorage, setStorage } from '@services/storage'

export type SignInProps = {
  email: string
  password: string
}

export type AccountProps = {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
}

export type AccountContextProps = {
  account: AccountProps | null

  pushSignOut: () => void
  pushSignIn: (props: SignInProps) => Promise<void>
}

type AccountProviderProps = {
  children: ReactNode
}

export const AccountContext = createContext({} as AccountContextProps)

export function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState<AccountProps | null>(null)

  useEffect(() => {
    const { '@q2:token': token } = parseCookies()
    getStorage('@q2:account').then((data) => {
      if (token && data) {
        setAccount(JSON.parse(data))
      }
    })
  }, [])

  const pushSignOut = () => {
    setAccount(null)
    removeStorage('@q2:account')
    destroyCookie(undefined, '@q2:token', {
      path: '/',
    })
  }

  const pushSignIn = async ({ email, password }: SignInProps) => {
    try {
      const { data } = await api.post('signin', {
        email,
        password,
      })

      setCookie(undefined, '@q2:token', data.accessToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      })
      setStorage('@q2:account', JSON.stringify(data.user))
      setAccount(data.user)
    } catch (error: any) {
      toast.error(error.response.data)
    }
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        pushSignOut,
        pushSignIn,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export function useAccount() {
  const context = useContext(AccountContext)
  return context
}
