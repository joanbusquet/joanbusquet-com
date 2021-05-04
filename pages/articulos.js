import Head from "next/head"
import PropTypes from "prop-types"

import Container from "components/Ui/Container/Container"
import PostsList from "components/Posts/PostsList/PostsList"

// Posts
import { getAllPosts } from "lib/posts-util"
import Hero from "components/Ui/Hero/Hero"

export default function ArticulosPage({ posts }) {
  return (
    <>
      <Head>
        <title>▷ Posts | Joan Busquet</title>
        <meta
          name="description"
          content="Artículos de desarrollo web en Javascript, React, NodeJS, aplicaciones móviles y mucho más."
        />
      </Head>
      <Hero title="Artículos" />
      <Container>
        <PostsList posts={posts} />
      </Container>
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}

ArticulosPage.propTypes = {
  posts: PropTypes.array.isRequired,
}
