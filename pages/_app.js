import Head from 'next/head'
import '../styles/base.css'

import { MenuBarProvider } from '../context/MenuBarContext'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicholas Glazer - talking about development, linux and philosophy</title>
      </Head>
      <MenuBarProvider>
        <Component {...pageProps} />
      </MenuBarProvider>
    </>
  )
}
