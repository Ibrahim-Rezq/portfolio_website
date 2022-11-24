import Link from "next/link"
import Image from "next/image"
import { Badge } from "./UI/Badge"
import { AiOutlineMinus, AiOutlineComment, AiOutlineFire } from "react-icons/ai"

type PostCardProps = {
  data: {
    id: number | string
    image: string
    title: string
    body: string
    catagory: string[]
    meta: {
      date: string
      views: number
    }
  }
}

const PostCard = ({ data }: PostCardProps) => {
  return (
    <article className="relative w-80 bg-slate-100 shadow-xl p-6">
      <section className="flex justify-center items-center w-full ">
        <div className="relative min-w-[80px] h-[80px] mr-4 border-slate-500 border-[1px] shadow-inner">
          <Image
            src={data.image}
            alt={" "}
            fill
            style={{ objectFit: "cover" }}
            className="hover:m-[-0.25rem] duration-300 border-slate-100 border-[0.5px]"
          />
        </div>
        <h4 className="grow text-lg font-semibold capitalize truncate">
          {data.title}
        </h4>
      </section>
      <PostMeta data={data.meta} />
      <section className="p-6 w-full h-full grid gap-4 place-content-between	">
        <p>{data.body.slice(0, 150)}...</p>
        <div className="flex gap-2">
          {data.catagory.map((cat: string, i: number) => {
            return (
              <Link key={cat + i} href="/">
                <Badge variant={Badge.variant.BLUE} icon>
                  {cat}
                </Badge>
              </Link>
            )
          })}
          <Link
            href={`/blog/${data.id}`}
            className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] border border-sky-900 duration-300 py-1 px-2 hover:py-2  hover:px-2.5 text-slate-200 bg-slate-700 hover:text-slate-700 hover:bg-transparent"
          >
            Continue Reading
          </Link>
        </div>
      </section>
    </article>
  )
}

export default PostCard

const PostMeta = ({ data }: any) => {
  const date = new Date(data.date)
  const month = date.toString().slice(4, 7)
  const day = date.getDate()
  const year = date.getFullYear()

  return (
    <>
      <section className="flex justify-center items-center w-full mt-4">
        <p className="mr-2">{`${month} ${day}, ${year}`}</p>
        <AiOutlineMinus className="text-teal-600" />

        {/* <p className="mx-2 flex justify-center items-center">
          <AiOutlineComment className="text-teal-600" />
          {1}
        </p> */}
        <p className="mx-2 flex justify-center items-center">
          <AiOutlineFire className="text-teal-600" />
          {data.views}
        </p>
      </section>
    </>
  )
}

PostCard.defaultProps = {
  body: " ",
  catagory: [],
  id: " ",
  image: " ",
  title: " ",
  meta: {
    date: "",
    views: 0,
  },
}
