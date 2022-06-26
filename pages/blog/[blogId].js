import Head from "next/head";
const First = ({ post }) => {
  return (
    <div className="page-100">
      <Head>
        <title>{post.title.slice(0, 10)}</title>
      </Head>
      <div className="container m-auto">
        {post && (
          <>
            <div className="p-4 mb-2">
              <h1 className="">{post.title}</h1>
            </div>
            <p className="md:w-4/5 m-auto">{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default First;

export async function getStaticProps(context) {
  const {
    params: { blogId },
  } = context;
  const res = await fetch(
    `https://my-json-server.typicode.com/Ibrahim-Rezq/portfolio_website/posts/${blogId}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://my-json-server.typicode.com/Ibrahim-Rezq/portfolio_website/posts/`
  );
  const data = await res.json();
  const paths = data.map((el) => {
    return { params: { blogId: `${el.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}
