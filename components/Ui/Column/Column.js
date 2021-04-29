import PropTypes from "prop-types"
import classes from "./Column.module.css"

export default function Column({ children }) {
  return <div className={classes.column}>{children}</div>
}

Column.propTypes = {
  children: PropTypes.object.isRequired,
}
