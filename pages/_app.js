import PropTypes from "prop-types"
import Head from "next/head"

import "../styles/globals.css"
import Layout from "components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="/fonts/Artico/Artico.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Artico/ArticoMedium.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Artico/ArticoBold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Artico/Artico.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Artico/ArticoMedium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Artico/ArticoBold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
}
