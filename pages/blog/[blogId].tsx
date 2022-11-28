import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { PostMeta } from "../../components/Blog/PostCard"
import { SEOHead } from "../../components/Global/SEOHead"
import { Badge } from "../../components/UI/Badge"
import { Container } from "../../components/UI/Container"
import Icon from "../../components/UI/Icon"
import ReactMarkdown from "react-markdown"
import data from "../../db"
const BlogPost = ({ post }: any) => {
  return (
    <div className="min-h-cont py-4">
      <SEOHead title={"About"} />
      <Container center classes="py-8">
        <article className="relative min-w-96 max-w-4xl bg-slate-100 shadow-xl p-2 mb-6 mx-auto">
          <div className="relative min-w-full min-h-40 h-screen max-h-72 ">
            <Image
              src={post.image}
              alt={" "}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <section className="p-6 w-full h-full grid gap-4 place-content-between">
            <h4 className="grow text-lg font-semibold capitalize text-center">
              {post.title}
            </h4>
            <PostMeta data={post.meta} />
            <div className="markdown">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
          </section>
          <p className="text-center mb-4 font-semibold">Categorized in: </p>
          <div className="flex justify-center items-center gap-2 mb-4">
            {post.catagory.map((cat: string, i: number) => {
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
        </article>
      </Container>
    </div>
  )
}

export default BlogPost

export const getStaticProps: GetStaticProps = async (context: any) => {
  const {
    params: { blogId },
  } = context
  const post = { ...data.Posts.find((el) => el.id === +blogId) }
  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const paths = data.Posts.map((el: any) => {
    return { params: { blogId: `${el.id}` } }
  })
  return {
    paths,
    fallback: false,
  }
}
