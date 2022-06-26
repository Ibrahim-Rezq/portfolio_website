import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-20 bg-slate-900 text-slate-100 flex justify-center items-center">
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
