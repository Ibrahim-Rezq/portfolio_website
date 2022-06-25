import PostCard from "../../componenets/PostCard";

const index = ({ posts }) => {
  return (
    <div className="page-100">
      <div className="container">
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => {
            return <PostCard post={post} />;
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
