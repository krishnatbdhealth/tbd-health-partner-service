import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../aws-config"
import { awsinitialize } from '../aws-config'

export default function App({ Component, pageProps }: AppProps) {
  awsinitialize()
  return <Component {...pageProps} />
}
