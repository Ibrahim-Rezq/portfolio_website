import React from "react"
import ProjectCard from "./ProjectCard"
import { Container } from "./UI/Container"
import SectionHeader from "./UI/SectionHeader"
import p from "../assets/portfolio.png"
import g from "../assets/GamerZone.png"

const ProjectsData = [
  {
    id: 1,
    image: p,
    title: "Personal Portfolio",
    body: "A Personal Portfolio/Blog Build With Next.js For SEO optmization and Fast Data Deliviry",
    catagory: [
      { name: "Next.js", icon: "Next" },
      { name: "React.js", icon: "React" },
      { name: "TailWind", icon: "Tailwind" },
    ],
    liveLink: "https://gamerzone391.netlify.app/",
    githubLink: "https://github.com/Ibrahim-Rezq/portfolio_website",
  },
  {
    id: 2,
    image: g,
    title: "GamerZone",
    body: "An E-commerce Website Build With React.js For FrontEnd with Auth0 for Authintication and Netlify Functions for Backend with AirTable for Database simulation",
    catagory: [
      { name: "React.js", icon: "React" },
      { name: "Styled-Component", icon: "Styled" },
      { name: "Netlify", icon: "Netlify" },
    ],
    liveLink: "https://gamerzone391.netlify.app/",
    githubLink: "https://github.com/Ibrahim-Rezq/Gamer_Zone",
  },
]

const Projects = ({ projects }: any) => {
  return (
    <Container center padding={4} classes="mt-10">
      <SectionHeader title="Recent Projects" />
      <ul className="flex gap-4 flex-wrap justify-evenly items-center my-10 ">
        {ProjectsData.map((item: any) => {
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
