import { SEOHead } from "../../components/Global/SEOHead"
import PostCard from "../../components/Blog/PostCard"
import { Container } from "../../components/UI/Container"
import SectionHeader from "../../components/UI/SectionHeader"
import data from "../../db"
const index = ({ posts }: any) => {
  return (
    <div className="min-h-page py-4">
      <SEOHead title={"Blog"} />
      <Container center classes="py-8">
        <SectionHeader title="My Blog" />
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-10 place-items-center items-start">
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
  return {
    props: { posts: data.Posts },
  }
}
