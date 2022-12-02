import Link from "next/link"
import Image from "next/image"
import { Badge } from "./UI/Badge"
import Icon from "./UI/Icon"
import Button from "./UI/Button"

type PostCardProps = {
  post: BlogPost
}

const PostCard = ({ post }: PostCardProps) => {
  const { image, summary, title, category, slug } = post
  return (
    <article className="relative w-96 bg-slate-100 shadow-xl p-6 mb-6">
      <section className="flex justify-center items-center w-full ">
        <div className="relative min-w-[80px] h-[80px] mr-4 border-slate-500 border-[1px] shadow-inner">
          <Image
            src={image.url}
            alt={" "}
            fill
            style={{ objectFit: "cover" }}
            className="hover:m-[-0.25rem] duration-300 border-slate-100 border-[0.5px]"
          />
        </div>
        <h4 className="grow text-lg font-semibold capitalize truncate">
          {title}
        </h4>
      </section>
      <PostMeta post={post} />
      <section className="px-4 w-full h-full grid gap-4 place-content-between relative">
        <p className="w-full">{summary}...</p>
        <div className="flex gap-2 flex-wrap">
          {category.map((cat: string, i: number) => {
            return (
              <Link key={cat + i} href="/">
                <Badge variant={Badge.variant.BLUE}>
                  <Icon />
                  {cat}
                </Badge>
              </Link>
            )
          })}
        </div>
        <Link href={`/blog/${slug}`} className="mb-[-2.5rem] m-auto">
          <Button>Continue Reading</Button>
        </Link>
      </section>
    </article>
  )
}

export default PostCard

export const PostMeta = ({ post }: any) => {
  const date = new Date(post?.publishedAt ?? " ")
  const month = date.toString().slice(4, 7)
  const day = date.getDate()
  const year = date.getFullYear()

  return (
    <>
      <section className="flex justify-center items-center w-full mt-4">
        <p className="mr-2">{`${month} ${day}, ${year}`}</p>
        {/* <AiOutlineMinus className="text-teal-600" /> */}

        {/* <p className="mx-2 flex justify-center items-center">
          <AiOutlineComment className="text-teal-600" />
          {1}
        </p> */}

        {/* <p className="mx-2 flex justify-center items-center">
          <AiOutlineFire className="text-teal-600" />
          {views}
        </p> */}
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
