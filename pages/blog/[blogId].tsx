import { GetStaticProps } from "next"
import Head from "next/head"
const BlogPost = ({ post }: any) => {
  return (
    <div className="page-100">
      <Head>
        <title>{post.title.slice(0, 10)}</title>
      </Head>
      <div className="container m-auto">
        {post && (
          <>
            <div className="p-4 mb-2">
              <h1 className="">{post.title}</h1>
            </div>
            <p className="md:w-4/5 m-auto">{post.body}</p>
          </>
        )}
      </div>
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
