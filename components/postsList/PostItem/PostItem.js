import PropTypes from "prop-types"
import Image from "next/image"

import classes from "./PostItem.module.css"

export default function PostItem({ post }) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={`/images/categories/${post.category}.png`}
          alt={post.title}
          width={177}
          height={177}
        />
      </div>
      <div className={classes.data}>
        <h3
          className={classes.category}
          style={post.categoryColor && { color: post.categoryColor }}
        >
          {post.category}
        </h3>
        <h2 className={classes.title}>{post.title}</h2>
        <p className={classes.meta}>
          {post.formattedDate} · {post.readingTime} min lectura
        </p>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}
