import { SEOHead } from "../components/Global/SEOHead"
import Hero from "../components/Home/Hero"
import BlogPosts from "../components/Home/BlogPosts"
import Projects from "../components/Home/Projects"
import Skills from "../components/Home/Skills"
import ContactFrom from "../components/Contact/ContactFrom"
import data from "../db.js"

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
  return {
    props: {
      projects: data.Projects,
      posts: data.Posts.splice(0, 3),
    },
  }
}
