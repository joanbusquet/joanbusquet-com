import PropTypes from "prop-types"
import Head from "next/head"
import Container from "components/Ui/Container/Container"
import PostContent from "components/Posts/PostContent/PostContent"
import { getPostData, getPostsFiles } from "lib/posts-util"

export default function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <Container>
        <PostContent post={post} />
      </Container>
    </>
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    // revalidate: 600,
  }
}

export function getStaticPaths() {
  // Get posts inside posts folders
  const postFileNames = getPostsFiles()

  // Return an array of filenames without md extension
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""))

  // Return array of objects of paths. Example:
  /* paths: [
    { params: {slug: "post-1"} },
    { params: {slug: "post-2"} },
    { params: {slug: "post-3"} }
  ]
  */

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

PostDetailPage.propTypes = {
  post: PropTypes.object.isRequired,
}
