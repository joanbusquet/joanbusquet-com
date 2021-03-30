import PropTypes from "prop-types"
import PostItem from "./PostItem/PostItem"

export default function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
