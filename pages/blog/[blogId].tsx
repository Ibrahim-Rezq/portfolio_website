import { GetStaticProps } from "next"
import { SEOHead } from "../../components/Global/SEOHead"
import { Container } from "../../components/UI/Container"

const BlogPost = ({ post }: any) => {
  return (
    <div className="min-h-cont py-4">
      <SEOHead title={"About"} />
      <Container center classes="py-8">
        <h2 className="text-3xl text-center font-bold p-4 mb-2">
          {post.title}
        </h2>
        <p className="md:w-4/5 m-auto">{post.body}</p>
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
