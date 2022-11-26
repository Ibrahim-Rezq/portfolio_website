import { SEOHead } from "../components/Global/SEOHead"
import Hero from "../components/Home/Hero"
import BlogPosts from "../components/Home/BlogPosts"
import Projects from "../components/Home/Projects"
import Skills from "../components/Skills/Skills"

const Index = ({ projects, posts }: any) => {
  return (
    <div className="page">
      <SEOHead />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <BlogPosts posts={posts} />
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
