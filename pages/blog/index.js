import PostCard from "../../components/PostCard";
import Head from "next/head";

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
  const res = await fetch(
    "https://my-json-server.typicode.com/Ibrahim-Rezq/portfolio_website/posts/"
  );
  const data = await res.json();
  return {
    props: { posts: data },
  };
}
