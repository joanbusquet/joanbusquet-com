import Head from "next/head"

import Container from "components/ui/Container/Container"

export default function ArticulosPage() {
  return (
    <>
      <Head>
        <title>▷ Posts | Joan Busquet</title>
        <meta
          name="description"
          content="Artículos de desarrollo web en Javascript, React, NodeJS, aplicaciones móviles y mucho más."
        />
      </Head>
      <Container>Posts</Container>
    </>
  )
}
