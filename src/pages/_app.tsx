import * as React from 'react'

import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { AccountProvider } from '@contexts/account'
import { CustomersProvider } from '@contexts/customers'

import GlobalFonts from '@assets/styles/fonts'
import theme from '@assets/styles/theme'

import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalFonts />
      <AccountProvider>
        <CustomersProvider>
          <Component {...pageProps} />
        </CustomersProvider>
      </AccountProvider>
    </ThemeProvider>
  )
}
