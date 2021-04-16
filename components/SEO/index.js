import Head from "next/head"

const SEO = () => {
  return (
    <Head>
      <title>Saol</title>
      <link rel="icon" href="/favicon-32x32.png" />
      <meta name="title" content="Saol" />
      <meta
        name="description"
        content="Saol is a multidisciplinary studio based on the West Coast of Ireland. We are a team of architects, designers, strategists & makers, who work with organisations intent on making systems change a reality"
      />
      <meta name="author" content="Saol" />
      <meta name="copyright" content="Saol" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://studiosaol.com/" />
      <meta property="og:title" content="Saol" />
      <meta
        property="og:description"
        content="Saol is a multidisciplinary studio based on the West Coast of Ireland. We are a team of architects, designers, strategists & makers, who work with organisations intent on making systems change a reality"
      />
      <meta property="og:image" content="https://saol.vercel.app/og.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://studiosaol.com/" />
      <meta property="twitter:title" content="Saol" />
      <meta
        property="twitter:description"
        content="Saol is a multidisciplinary studio based on the West Coast of Ireland. We are a team of architects, designers, strategists & makers, who work with organisations intent on making systems change a reality"
      />
      <meta property="twitter:image" content="https://saol.vercel.app/og.png" />
    </Head>
  )
}

export default SEO
