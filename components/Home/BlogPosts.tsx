import React from "react"
import PostCard from "../Blog/PostCard"
import { Container } from "../UI/Container"
import SectionHeader from "../UI/SectionHeader"

const BlogPosts = ({ posts }: any) => {
  return (
    <Container center classes="py-8">
      <SectionHeader title="Recent Posts" />
      <ul className="flex gap-4 flex-wrap justify-evenly items-center my-10 ">
        {posts.map((item: any) => {
          return (
            <li key={item.id}>
              <PostCard post={item} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default BlogPosts
