import PropTypes from "prop-types"
import classes from "./Container.module.css"

export default function Container({ children, flex }) {
  return (
    <div className={flex ? classes.flexContainer : classes.container}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  flex: PropTypes.bool,
}
