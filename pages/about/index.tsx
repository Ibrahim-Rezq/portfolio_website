import React from "react"
import { SEOHead } from "../../components/Global/SEOHead"
import Card from "../../components/UI/Card"
import { Container } from "../../components/UI/Container"
import SectionHeader from "../../components/UI/SectionHeader"

const About = () => {
  const socials = [
    { title: "Linkedin", iconName: "Linkedin" },
    { title: "Youtube", iconName: "Youtube" },
    { title: "Twitter", iconName: "Twitter" },
    { title: "Instagram", iconName: "Instagram" },
  ]

  return (
    <div className="min-h-cont py-4">
      <SEOHead title={"About"} />
      <Container center classes="py-8">
        <SectionHeader title="About Me" />
        <p className="p-8 max-w-xl">
          Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Porro, rerum est sint animi officiis, voluptas dolorum, voluptatibus
          labore sit nesciunt in tenetur natus. Reprehenderit necessitatibus
          culpa enim autem consequatur dicta veniam. Voluptatem tempore quisquam
          quod repudiandae quaerat reiciendis perferendis illum, dignissimos
          distinctio suscipit? dolor sit amet consectetur adipisicing elit. A,
          velit
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4  gap-4 place-items-center my-10 ">
          {socials.map((item: any) => {
            return (
              <li key={item.title}>
                <Card data={item} />
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default About
