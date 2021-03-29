import Head from "next/head"
import "@/styles/main.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/xkc1xyy.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
