import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <>
      <article className="relative ">
        {data.image && (
          <section className="relative">
            <Image src={data.image} width="640" height="320" />
            <Link href={`/blog/${data.id}`}>
              <a className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 hover:bg-lime-100 flex justify-center items-center duration-300">
                <span className="text-3xl border-2 border-slate-900 p-2 rounded-full text-slate-900">
                  <FaSearch />
                </span>
              </a>
            </Link>
          </section>
        )}
        <section className=" p-6 w-full h-full grid gap-4 place-content-between	">
          <h4 className="">{data.title.slice(0, 15)}</h4>
          <p>{data.body.slice(0, 150)}</p>
          <div className="flex justify">
            {data.catagory.map((cat) => {
              return (
                <Link href="/">
                  <a className="mr-2 px-2 border border-slate-900 rounded hover:bg-slate-900 hover:text-lime-200 duration-300">
                    {cat}
                  </a>
                </Link>
              );
            })}
            {!data.image && (
              <Link href={`/blog/${data.id}`}>
                <a className="ml-auto mr-2 text-slate-500 hover:text-slate-900">
                  More
                </a>
              </Link>
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Card;
