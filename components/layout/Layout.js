import PropTypes from "prop-types"
import classes from "./Layout.module.css"

import Header from "components/layout/Header/Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.container}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}
