import PostCard from "../../components/PostCard";

const index = ({ posts }) => {
  return (
    <div className="page-100">
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
  const res = await fetch("http://localhost:8000/posts/");
  const data = await res.json();
  return {
    props: { posts: data },
  };
}
