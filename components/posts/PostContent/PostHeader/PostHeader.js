import PropTypes from "prop-types"

import classes from "./PostHeader.module.css"
import GitHub from "components/icons/social/GitHub"

export default function PostHeader({ post }) {
  return (
    <section className={classes.postHeader}>
      <p className={classes.language}>{post.category}</p>
      <h1 className={classes.title}>{post.title}</h1>
      <p className={classes.meta}>
        {post.formattedDate} · {post.readingTime} min lectura · Editar{" "}
        <GitHub width={20} height={20} className={classes.icon} fill="grey" />
      </p>
    </section>
  )
}

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
}
