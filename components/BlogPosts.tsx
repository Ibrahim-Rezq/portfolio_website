import React from "react"
import PostCard from "./PostCard"
import { Container } from "./UI/Container"

const BlogPosts = ({ posts }: any) => {
  return (
    <Container center classes="py-8">
      <h2 className="text-3xl text-center font-bold">Recent Posts</h2>
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
  )
}

export default BlogPosts
