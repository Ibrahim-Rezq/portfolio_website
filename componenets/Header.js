import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

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
    <nav className={styles.main}>
      <section className={`${styles.container} container`}>
        <Link href="/">
          <div className={styles.logo}>
            <span>GameDev</span>بالعربى
          </div>
        </Link>
        <ul className={styles.navLinks}>
          {NavLinks.map((link) => {
            return (
              <li>
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
