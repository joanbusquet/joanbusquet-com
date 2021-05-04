import Head from "next/head"
import PropTypes from "prop-types"

// UI components
import Container from "components/Ui/Container/Container"
import Row from "components/Ui/Row/Row"
import Column from "components/Ui/Column/Column"

import NewsletterBar from "components/Newsletter/NewsletterBar/NewsletterBar"

// Home page components
import Hero from "components/HomePage/HomeHero/HomeHero"
import PostsList from "components/Posts/PostsList/PostsList"
// import VideosList from "components/Videos/VideosList/VideosList"
// import Courses from "components/HomePage/Courses/Courses"

// Posts
import { getFeaturedPosts } from "lib/posts-util"

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Desarrollo web Javascript Full Stack | Joan Busquet</title>
        <meta
          name="description"
          content="Aprende desarrollo web full stack Javascript, librerías, frameworks ⚛️  y rendimiento web."
        />
      </Head>
      <Hero />
      <Container>
        {/* <Courses /> */}
        <Row>
          <Column>
            <PostsList posts={posts} title="Últimos artículos" />
          </Column>
          {/* <Column>
            <VideosList videos={posts} />
          </Column> */}
        </Row>
      </Container>
      <NewsletterBar />
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
