import { SEOHead } from "../components/Global/SEOHead"
import NotFoundImage from "../assets/404.svg"
import Image from "next/image"
const ErrorPage = (): JSX.Element => {
  return (
    <div className="bg-white ">
      <SEOHead title="Error" />
      <div className="w-full min-h-cont relative -mb-4 mt-4">
        <Image src={NotFoundImage} alt="404 Page not found" fill />
      </div>
    </div>
  )
}

export default ErrorPage
