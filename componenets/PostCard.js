import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <>
      <li>
        <article className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardHead}>
              <h4>{post.title}</h4>
            </div>
            <div className={styles.cardbody}>
              <p>{post.body.slice(0, 300)}</p>
            </div>
            <div className={styles.cardFooter}>
              {post.catagory.map((cat) => {
                return <span>{cat}</span>;
              })}
              <Link href={`/blog/${post.id}`}>
                <a>More</a>
              </Link>
            </div>
          </div>
          <div className={styles.cardImg}>
            <Image src={post.image} width={400} height={268} />
          </div>
        </article>
      </li>
    </>
  );
};

export default PostCard;
