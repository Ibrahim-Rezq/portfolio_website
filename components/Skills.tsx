import React from "react"
import { Container } from "./UI/Container"
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
      <h2 className="text-3xl text-center font-bold">Skills/Languages</h2>
      <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl" />
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
