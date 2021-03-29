import Head from "next/head"
import PropTypes from "prop-types"

import Hero from "components/hero/Hero"
import SectionTitle from "components/ui/SectionTitle/SectionTitle"
import Container from "components/ui/Container/Container"
import PostsList from "components/posts/PostsList/PostsList"

import { getFeaturedPosts } from "lib/posts-util"

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>
          ▷ Desarrollo web Javascript y rendimiento web | Joan Busquet
        </title>
        <meta
          name="description"
          content="Aprende desarrollo web Javascript, React, librerías, frameworks, rendimiento web, SEO, CSS... totalmente GRATIS."
        />
      </Head>
      <Hero />
      <Container>
        <SectionTitle title="Últimos artículos" />
        <PostsList posts={posts} />
      </Container>
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
}
