import Link from "next/link"
import Image from "next/image"
import { Badge } from "../UI/Badge"
import Icon from "../UI/Icon"

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
        <h4 className="text-2xl">{data.title}</h4>
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

ProjectCard.defaultProps = {
  body: " ",
  catagory: [],
  id: " ",
  image: " ",
  title: " ",
}
