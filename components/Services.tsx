import React from "react"
import { Container } from "./UI/Container"
import { FaBrain, FaCode } from "react-icons/fa"
import SkillCard from "./SkillCard"

const Skills = ({ skillss }: any) => {
  const skills = [
    {
      title: "HTML",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sunt?  doloribus ratione quod saepe ea cumque unde fugit voluptatum exercitationem!",
      Icon: <FaBrain />,
    },
    {
      title: "CSS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sunt?  doloribus ratione quod saepe ea cumque unde fugit voluptatum exercitationem!",
      Icon: <FaCode />,
    },
  ]
  return (
    <Container center padding={4} classes="mt-10">
      <h2 className="text-3xl text-center font-bold">Skills</h2>
      <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl" />
      <ul className="flex gap-4 flex-wrap justify-evenly items-center my-10 ">
        {skills.map((item: any) => {
          return (
            <article className="  flex justify-center items-center min-h-80 my-10 md:my-20 flex-col md:flex-row shadow-xl md:shadow-none">
              <span className="z-10">
                {React.cloneElement(item.Icon, {
                  className: "text-teal-600 mb-[-1rem] text-5xl",
                })}
              </span>
              <section className="p-6 max-w-xl grid gap-4 place-content-between bg-slate-100 shadow-xl text-center">
                <h4 className="text-2xl">{item.title}</h4>
                <p className="">{item.body}</p>
              </section>
            </article>
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
