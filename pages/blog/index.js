import PostCard from "../../components/PostCard";
import Head from "next/head";
import { BASE_URL } from "../../Utils/consts.js";

const index = ({ posts }) => {
  return (
    <div className="page-100">
      <Head>
        <title>Blog</title>
      </Head>
      <div className="container m-auto ">
        <h1 className="text-center pb-4">My Blog</h1>
        <ul>
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/posts/`);
  const data = await res.json();
  return {
    props: { posts: data },
  };
}
