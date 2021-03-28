import PropTypes from "prop-types"
import useCategory from "hooks/useCategory"
import Image from "next/image"
import classes from "./PostHeader.module.css"
import GitHub from "components/icons/social/GitHub"

export default function PostHeader({ post }) {
  const category = useCategory(post.category)
  return (
    <section className={classes.postHeader}>
      <div className={classes.category}>
        <Image
          src={category.image}
          alt={category.name}
          width={35}
          height={35}
        />
        <h3 style={category.color && { color: category.color }}>
          {category.name}
        </h3>
      </div>
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
