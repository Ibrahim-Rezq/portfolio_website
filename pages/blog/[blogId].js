import Image from "next/image";
import styles from "../../styles/PostPage.module.css";
const First = ({ post }) => {
  return (
    <div className="page-100">
      <div className="container">
        {post && (
          <>
            <div className={styles.header}>
              <h1 className={styles.heading}>{post.title}</h1>
            </div>
            {post.image && (
              <div className={styles.img}>
                <Image src={post.image} width={800} height={536} />
              </div>
            )}
            <p style={{ maxWidth: "65rem", margin: "auto" }}>{post.body}</p>
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
  const res = await fetch(`http://localhost:8000/posts/${blogId}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8000/posts");
  const data = await res.json();
  const paths = data.map((el) => {
    return { params: { blogId: `${el.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}
