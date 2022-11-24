import { SEOHead } from "../../components/Global/SEOHead"
import PostCard from "../../components/PostCard"
import { Container } from "../../components/UI/Container"

const index = ({ posts }: any) => {
  return (
    <div className="min-h-page">
      <SEOHead title={"Blog"} />
      <Container center classes="py-8">
        <h2 className="text-3xl text-center font-bold">My Blog</h2>
        <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl opacity-70" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 place-items-center items-start">
          {posts.map((item: any) => {
            return (
              <li key={item.id}>
                <PostCard data={item} />
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVE_URL + `posts/`)
  const data = await res.json()
  return {
    props: { posts: data.splice(0, 5) },
  }
}
