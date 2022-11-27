import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { PostMeta } from "../../components/Blog/PostCard"
import { SEOHead } from "../../components/Global/SEOHead"
import { Badge } from "../../components/UI/Badge"
import Button from "../../components/UI/Button"
import { Container } from "../../components/UI/Container"
import Icon from "../../components/UI/Icon"
import ReactMarkdown from "react-markdown"

const BlogPost = ({ post }: any) => {
  /*
      "id": 3,
      "image": "https://picsum.photos/640/360",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sunt? Laborum ipsam alias vero in eos perspiciatis illum. Perferendis dignissimos omnis sapiente dolorem hic sint vel excepturi dicta necessitatibus! Neque eligendi dolores asperiores nemo non quidem fuga molestiae, consequatur tempore repudiandae eveniet quia hic in ipsa ut incidunt quo suscipit accusamus odio adipisci! Incidunt, repudiandae officia. Alias molestias veritatis vitae voluptatem beatae architecto, et ipsum odio dicta neque numquam eum labore veniam dolores magni velit praesentium nam nesciunt aut quibusdam quisquam iusto, rem sequi aperiam. Provident nostrum natus, cum nesciunt, doloribus ratione quod saepe ea cumque unde fugit voluptatum exercitationem!",
      "catagory": ["politcs"],
      "meta": { "date": "5-5-2022", "views": 3 }
  */
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
  const res = await fetch(process.env.NEXT_PUBLIC_SERVE_URL + `posts/${blogId}`)
  const data = await res.json()
  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVE_URL + `posts/`)
  const data = await res.json()
  const paths = data.map((el: any) => {
    return { params: { blogId: `${el.id}` } }
  })

  return {
    paths,
    fallback: false,
  }
}
