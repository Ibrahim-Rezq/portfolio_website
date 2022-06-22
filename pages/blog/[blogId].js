import Link from 'next/link';

const First = ({ post }) => {
  return (
    <div>
      {post && (
        <>
          <Link href='/blog'>
            <a>got to blogs</a>
          </Link>
          <h1>
            This is Blog Num
            {post.id}
          </h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default First;

export async function getStaticProps(context) {
  const {
    params: { blogId },
  } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map((el) => {
    return { params: { blogId: `${el.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}
