import PropTypes from "prop-types"
import Head from "next/head"

import "../styles/globals.css"
import Layout from "components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
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
