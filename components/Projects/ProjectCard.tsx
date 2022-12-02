import Link from "next/link"
import Image from "next/image"
import { Badge } from "../UI/Badge"
import Icon from "../UI/Icon"
import Button from "../UI/Button"
import { BsGithub } from "react-icons/bs"
import { HiOutlineArrowRight } from "react-icons/hi2"

type ProjectCardProps = {
  data: {
    id: number | string
    image: string
    title: string
    body: string
    catagory: {
      name: string
      icon: any
    }[]
    liveLink: string
    githubLink: string
  }
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <article className="  flex justify-center items-center min-h-80 my-10 md:my-20 flex-col md:flex-row shadow-xl md:shadow-none border md:border-0">
      <section className="relative h-72 md:h-[20rem] w-full md:w-[30rem] overflow-hidden border md:border">
        <Image
          className="rounded hover:scale-110 duration-300 grayscale-[75%] hover:grayscale-0"
          src={data.image}
          alt={" "}
          fill
          style={{ objectFit: "cover" }}
        />
      </section>
      <section className="md:rounded p-6 w-full h-full max-w-xl grid gap-4 place-content-between md:ml-[-5rem] z-40 bg-slate-100 md:shadow-xl">
        <section className="flex justify-between">
          <h4 className="text-2xl grow ">{data.title}</h4>
          <span className="hidden sm:block">
            <ProjectLinks
              githubLink={data.githubLink}
              liveLink={data.liveLink}
            />
          </span>
        </section>
        <section className="flex justify-between sm:hidden">
          <ProjectLinks githubLink={data.githubLink} liveLink={data.liveLink} />
        </section>
        <p>{data.body}</p>
        <div className="flex gap-2 flex-wrap">
          {data.catagory.map((cat, i: number) => {
            return (
              <Link key={cat.name + i} href="/">
                <Badge variant={Badge.variant.BLUE}>
                  <Icon iconName={cat.icon} />
                  {cat.name}
                </Badge>
              </Link>
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default ProjectCard

const ProjectLinks = ({ githubLink, liveLink }: any) => {
  return (
    <span className="ml-auto ">
      <Link href={githubLink} target="_blank">
        <Button
          iconLeft={<BsGithub />}
          classes="rounded-2xl py-1 px-1.5 text-sm mx-0.5 before:rounded-2xl"
        >
          GitHub
        </Button>
      </Link>
      <Link href={liveLink} target="_blank">
        <Button
          iconRight={<HiOutlineArrowRight />}
          classes="rounded-2xl py-1 px-1.5 text-sm mx-0.5 before:rounded-2xl"
        >
          Live
        </Button>
      </Link>
    </span>
  )
}

ProjectCard.defaultProps = {
  body: " ",
  catagory: [],
  id: " ",
  image: " ",
  title: " ",
  liveLink: " ",
  githubLink: " ",
}
