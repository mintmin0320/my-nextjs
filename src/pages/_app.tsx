import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { ThemeProvider } from '@mui/material'
import '@/styles/globals.scss'
import { theme } from '../styles/theme'

import SEO from '../../seo.config'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
