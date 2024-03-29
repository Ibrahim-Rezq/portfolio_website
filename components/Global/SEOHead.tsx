import Head from "next/head"

export const SEOHead = ({
  title = "Home",
  description = "The Wizard of the coding world.",
  keywords = "HTML, CSS, Javascript, React.js, Next.js, web developer, frondend developer",
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title + " | Ibrahim Rezq"}</title>
      <link rel="manifest" href="/site.webmanifest" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <meta name="theme-color" content="#334155" />
    </Head>
  )
}
