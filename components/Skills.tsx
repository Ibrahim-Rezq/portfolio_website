import React from "react"
import Card from "./UI/Card"
import { Container } from "./UI/Container"
import SectionHeader from "./UI/SectionHeader"

const Skills = ({ skillss }: any) => {
  const skills = [
    { title: "HTML", iconName: "Html" },
    { title: "CSS", iconName: "Css" },
    { title: "JavaScript", iconName: "JavaScript" },
    { title: "TypeScript", iconName: "TypeScript" },
    { title: "React.js", iconName: "React" },
    { title: "Next.js", iconName: "Next" },
  ]
  return (
    <section className="bg-slate-100">
      <Container center classes="mt-10 pt-8 bg-slate-100">
        <SectionHeader title="Skills/Languages" />
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center mt-10 ">
          {skills.map((item: any) => {
            return (
              <li key={item.title}>
                <Card data={item} />
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export default Skills
Skills.defaultProps = {
  skills: [],
}
