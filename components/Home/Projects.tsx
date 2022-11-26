import React from "react"
import ProjectCard from "../Projects/ProjectCard"
import { Container } from "../UI/Container"
import SectionHeader from "../UI/SectionHeader"

const Projects = ({ projects }: any) => {
  return (
    <Container center padding={4} classes="mt-10">
      <SectionHeader title="Recent Projects" />
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
