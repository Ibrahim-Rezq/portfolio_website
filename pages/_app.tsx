import type { AppProps } from "next/app"
import "../assets/styles/globals.css"
import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
