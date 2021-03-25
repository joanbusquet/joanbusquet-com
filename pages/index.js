import Head from "next/head"
import PropTypes from "prop-types"

import Hero from "components/hero/Hero"
import SocialIcons from "components/socialIcons/SocialIcons"
import SectionTitle from "components/ui/SectionTitle/SectionTitle"
import PostsList from "components/postsList/PostsList"

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SocialIcons />
      <SectionTitle title="Últimos artículos" />
      <PostsList posts={posts} />
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
