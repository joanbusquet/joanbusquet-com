import classes from "./Footer.module.css"
import PropTypes from "prop-types"
import Container from "components/Ui/Container/Container"

export default function Footer({ children }) {
  return (
    <footer className={classes.footer}>
      <Container>{children}</Container>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.object.isRequired,
}
