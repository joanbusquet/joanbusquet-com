import PropTypes from "prop-types"
import classes from "./Row.module.css"

export default function Row({ children }) {
  return <div className={classes.row}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.any.isRequired,
}
