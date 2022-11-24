import Link from "next/link"
import Image from "next/image"
import { Badge } from "./UI/Badge"

type ProjectCardProps = {
  data: {
    id: number | string
    image: string
    title: string
    body: string
    catagory: {
      name: string
      icon: string
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
                <Badge
                  variant={Badge.variant.BLUE}
                  // @ts-ignore
                  icon={Badge.icon[cat.icon as any]}
                >
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

/*
    <article className="relative w-80 bg-teal-800 rounded-xl">
      <section className="relative ">
        <Image
          className="rounded-md"
          src={data.image}
          alt={" "}
          width="640"
          height="320"
        />
        <Link
          className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 hover:bg-teal-300 flex justify-center items-center duration-300"
          href={`/blog/${data.id}`}
        >
          <span className="text-3xl border-2 border-black p-2 rounded-full text-black">
            <FaSearch />
          </span>
        </Link>
      </section>
      <section className="p-6 w-full h-full grid gap-4 place-content-between	">
        <h4 className="">{data.title.slice(0, 15)}</h4>
        <p>{data.body.slice(0, 150)}</p>
        <div className="flex gap-2 ">
          {data.catagory.map((cat: string, i: number) => {
            return (
              <Link key={cat + i} href="/">
                <Badge variant={Badge.variant.BLUE}>{cat}</Badge>
              </Link>
            )
          })}
        </div>
      </section>
    </article>

*/
