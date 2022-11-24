import { SEOHead } from "../components/Global/SEOHead"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import Projects from "../components/Projects"
import { Container } from "../components/UI/Container"

const Index = ({ projects, posts }: any) => {
  return (
    <div className="page">
      <SEOHead />
      <Hero />
      <Projects projects={projects} />
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

export default Index

export async function getStaticProps() {
  const resPost = await fetch(process.env.NEXT_PUBLIC_SERVE_URL + `posts`)
  const postData = await resPost.json()
  const res = await fetch(process.env.NEXT_PUBLIC_SERVE_URL + "projects")
  const data = await res.json()
  console.log(postData)
  return {
    props: {
      projects: data,
      posts: postData.splice(0, 3),
    },
  }
}
