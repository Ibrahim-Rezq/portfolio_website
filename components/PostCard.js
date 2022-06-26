import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <li>
        <article className="bg-indigo-100 md:w-4/5 m-auto	rounded my-4 flex items-center justify-between flex-col-reverse md:flex-row">
          <section className="p-4">
            <h4 className="text-indigo-500">{post.title}</h4>
            <p>{post.body.slice(0, 300)}</p>
            <div className="flex">
              {/* {post.catagory.map((cat) => {
                return (
                  <span className="mr-2 px-1 rounded bg-slate-300">{cat}</span>
                );
              })} */}
              <Link href={`/blog/${post.id}`}>
                <a className="ml-auto mr-4">More</a>
              </Link>
            </div>
          </section>
        </article>
      </li>
    </>
  );
};

export default PostCard;
