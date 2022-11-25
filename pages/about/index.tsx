import React from "react"
import Head from "next/head"
import { SEOHead } from "../../components/Global/SEOHead"
import { Container } from "../../components/UI/Container"

const About = () => {
  return (
    <div className="min-h-cont py-4">
      <SEOHead title={"About"} />
      <Container center classes="py-8">
        <h2 className="text-3xl text-center font-bold">About Me</h2>
        <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl opacity-70" />
        <p className="p-8 max-w-xl">
          Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Porro, rerum est sint animi officiis, voluptas dolorum, voluptatibus
          labore sit nesciunt in tenetur natus. Reprehenderit necessitatibus
          culpa enim autem consequatur dicta veniam. Voluptatem tempore quisquam
          quod repudiandae quaerat reiciendis perferendis illum, dignissimos
          distinctio suscipit? dolor sit amet consectetur adipisicing elit. A,
          velit
        </p>
      </Container>
    </div>
  )
}

export default About
