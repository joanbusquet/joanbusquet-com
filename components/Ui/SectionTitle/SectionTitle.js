import PropTypes from "prop-types"

import classes from "./SectionTitle.module.css"

export default function PostItem({ title }) {
  return <h2 className={classes.title}>{title}</h2>
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
}
