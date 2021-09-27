import Head from "next/head"
import PropTypes from "prop-types"

// UI components
import Container from "components/Ui/Container/Container"
import Row from "components/Ui/Row/Row"
import Column from "components/Ui/Column/Column"

// Home page components
import Hero from "components/HomePage/HomeHero/HomeHero"
import PostsList from "components/Posts/PostsList/PostsList"

// Posts
import { getFeaturedPosts } from "lib/posts-util"

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Desarrollo Javascript Full Stack | Joan Busquet</title>
        <meta
          name="description"
          content="Aprende desarrollo full stack Javascript, librerías, frameworks ⚛️  y buenas prácticas."
        />
      </Head>
      <Hero />
      <Container>
        <Row>
          <Column>
            <PostsList posts={posts} title="Últimos artículos" />
          </Column>
        </Row>
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
