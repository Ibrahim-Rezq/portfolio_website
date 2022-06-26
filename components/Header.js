import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const NavLinks = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/blog",
      name: "blog",
    },
    {
      path: "/about",
      name: "about",
    },
  ];
  return (
    <nav className="bg-slate-900 text-slate-100 h-20 flex">
      <section className="container mx-auto p-4 flex justify-between m-auto">
        <Link href="/">
          <div className="text-lg md:text-3xl font-bold">
            <span>GameDev</span>بالعربى
          </div>
        </Link>
        <ul className="flex justify-between md:text-lg items-center capitalize ">
          {NavLinks.map((link) => {
            return (
              <li key={link.path} className="px-4">
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Header;
