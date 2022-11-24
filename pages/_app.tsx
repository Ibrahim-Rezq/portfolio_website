import type { AppProps } from "next/app"
import "../styles/globals.css"
import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
