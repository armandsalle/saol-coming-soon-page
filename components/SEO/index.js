import Head from "next/head"

const SEO = () => {
  return (
    <Head>
      <title>Saol</title>
      <link rel="icon" href="/favicon-32x32.png" />
      <meta
        name="description"
        content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
      />
      <meta name="author" content="Saol" />
      <meta name="copyright" content="Saol" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://studiosaol.com/" />
      <meta property="og:title" content="Saol" />
      <meta
        property="og:description"
        content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
      />
      <meta property="og:image" content="https://saol.vercel.app/og.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://studiosaol.com/" />
      <meta property="twitter:title" content="Saol" />
      <meta
        property="twitter:description"
        content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
      />
      <meta property="twitter:image" content="https://saol.vercel.app/og.png" />
    </Head>
  )
}

export default SEO
