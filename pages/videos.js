import Head from "next/head"

import Container from "components/ui/Container/Container"

export default function VideosPage() {
  return (
    <>
      <Head>
        <title>▷ Videos | Joan Busquet</title>
        <meta
          name="description"
          content="Videos de desarrollo web en Javascript, React, NodeJS, aplicaciones móviles y mucho más."
        />
      </Head>
      <Container>Videos</Container>
    </>
  )
}
