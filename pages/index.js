import Head from "next/head"
import PropTypes from "prop-types"

import Hero from "components/HomePage/hero/Hero"
import SectionTitle from "components/Ui/SectionTitle/SectionTitle"
import Container from "components/Ui/Container/Container"
import PostsList from "components/Posts/PostsList/PostsList"

import { getFeaturedPosts } from "lib/posts-util"
import Topics from "components/HomePage/topics/Topics"

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

      <Topics />
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
