import PropTypes from "prop-types"
import PostItem from "./PostItem/PostItem"

import SectionTitle from "components/Ui/SectionTitle/SectionTitle"

export default function PostsList({ posts, title }) {
  return (
    <>
      {title && <SectionTitle title={title} />}
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string,
}
