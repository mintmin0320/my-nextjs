import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import '@/styles/globals.scss'
import SEO from '../../seo.config'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
