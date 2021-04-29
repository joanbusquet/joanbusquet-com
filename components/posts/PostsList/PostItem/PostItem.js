import PropTypes from "prop-types"
import Image from "next/image"
import Link from "next/link"
import classes from "./PostItem.module.css"
import useCategory from "hooks/useCategory"

export default function PostItem({ post }) {
  const category = useCategory(post.categoryId)

  return (
    <Link href={`/${post.slug}`}>
      <a>
        <div className={classes.container}>
          <div className={classes.image}>
            <Image
              src={category.image}
              alt={post.title}
              width={177}
              height={177}
            />
          </div>
          <div className={classes.data}>
            <h3 className={classes.title}>{post.title}</h3>
            <p className={classes.meta}>
              {post.formattedDate} · {post.readingTime} min lectura
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}
