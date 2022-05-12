import * as React from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import themeDark from '@styles/dark'
import LoadFonts from '@styles/fonts'
import themeLight from '@styles/light'

import 'react-toastify/dist/ReactToastify.css'

const theme = 'dark'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <LoadFonts />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
