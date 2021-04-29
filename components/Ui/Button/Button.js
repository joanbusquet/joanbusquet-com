import PropTypes from "prop-types"
import classes from "./Button.module.css"

export default function Button({ text }) {
  return (
    <button type="submit" className={classes.button}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
