import { SEOHead } from "../components/Global/SEOHead"
import Hero from "../components/Hero"
import BlogPosts from "../components/BlogPosts"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import ContactFrom from "../components/ContactFrom"
import data from "../db.js"
import { getAllBlogPosts } from "../utils/api/blogPost"

const Index = ({ projects, posts }: any) => {
  return (
    <div className="page">
      <SEOHead />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <BlogPosts posts={posts} />
      <ContactFrom />
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const posts = await getAllBlogPosts()

  return {
    props: {
      projects: data?.Projects??[],
      posts: posts?.splice(0, 3)??[],
    },
  }
}
