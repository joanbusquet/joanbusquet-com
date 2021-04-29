import PropTypes from "prop-types"
import Image from "next/image"
import Link from "next/link"
import classes from "./VideoItem.module.css"
import useCategory from "hooks/useCategory"

export default function VideoItem({ video }) {
  const category = useCategory(video.categoryId)

  return (
    <Link href={`/${video.slug}`}>
      <a>
        <div className={classes.container}>
          <div className={classes.image}>
            <Image
              src={category.image}
              alt={video.title}
              width={177}
              height={177}
            />
          </div>
          <div className={classes.data}>
            <h3
              className={classes.category}
              style={category.color && { color: category.color }}
            >
              {video.category}
            </h3>
            <h2 className={classes.title}>{video.title}</h2>
            <p className={classes.meta}>
              {video.formattedDate} · {video.readingTime} min lectura
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
}
