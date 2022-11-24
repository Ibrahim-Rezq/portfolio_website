import React from "react"
import Head from "next/head"
import { SEOHead } from "../../components/Global/SEOHead"

const About = () => {
  return (
    <div className="page-100">
      <SEOHead title={"About"} />
      <section className="container m-auto">
        <h1 className="text-center pb-4">about</h1>
        <p className="md:w-4/5 m-auto">
          Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Porro, rerum est sint animi officiis, voluptas dolorum, voluptatibus
          labore sit nesciunt in tenetur natus. Reprehenderit necessitatibus
          culpa enim autem consequatur dicta veniam. Voluptatem tempore quisquam
          quod repudiandae quaerat reiciendis perferendis illum, dignissimos
          distinctio suscipit? dolor sit amet consectetur adipisicing elit. A,
          velit
        </p>
      </section>
    </div>
  )
}

export default About
