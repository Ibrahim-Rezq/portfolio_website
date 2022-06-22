import Link from 'next/link';
const index = ({ posts }) => {
  return (
    <div>
      <Link href='/'>
        <a>return Home</a>
      </Link>
      <h1>This is Blog Page</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <Link href={`/blog/${post.id}`}>
                <a>Blog {post.id}</a>
              </Link>
            </li>
          );
        })}{' '}
      </ul>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: { posts: data },
  };
}
