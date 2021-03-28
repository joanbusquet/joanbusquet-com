import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="preload"
            href="/fonts/Artico/Artico.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Artico/ArticoMedium.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Artico/Artico.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Artico/ArticoMedium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
