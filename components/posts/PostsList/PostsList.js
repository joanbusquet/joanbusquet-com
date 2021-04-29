import PropTypes from "prop-types"
import PostItem from "./PostItem/PostItem"

import SectionTitle from "components/Ui/SectionTitle/SectionTitle"

export default function PostsList({ posts }) {
  return (
    <>
      <SectionTitle title="Últimos artículos" />
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
