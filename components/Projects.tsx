import React from "react"
import ProjectCard from "./ProjectCard"
import { Container } from "./UI/Container"

const Projects = ({ projects }: any) => {
  return (
    <Container center padding={4} classes="mt-10">
      <h2 className="text-3xl text-center font-bold">Recent Projects</h2>
      <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl" />
      <ul className="flex gap-4 flex-wrap justify-evenly items-center my-10 ">
        {projects.map((item: any) => {
          return (
            <li key={item.id}>
              <ProjectCard data={item} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Projects
