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
        <h2 className="text-3xl text-center font-bold">Recent Projects</h2>
        <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl" />
        <ul className="flex gap-4 flex-wrap justify-evenly items-center my-10 ">
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
  return {
    props: {
      projects: data,
      posts: postData.splice(0, 3),
    },
  }
}
