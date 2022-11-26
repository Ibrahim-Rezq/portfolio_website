import React from "react"
import { Container } from "../UI/Container"
import SectionHeader from "../UI/SectionHeader"
import SkillCard from "./SkillCard"

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
    <Container center padding={4} classes="mt-10">
      <SectionHeader title="Skills/Languages" />
      <ul className="flex gap-4 flex-wrap justify-around items-center my-10 ">
        {skills.map((item: any) => {
          return (
            <li key={item.name}>
              <SkillCard skill={item} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Skills
Skills.defaultProps = {
  skills: [],
}
