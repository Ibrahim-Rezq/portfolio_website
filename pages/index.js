import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../componenets/Hero";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>GameDev بالعربى</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
}
