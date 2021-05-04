import PropTypes from "prop-types"
import classes from "./Layout.module.css"

import Header from "components/Layout/Header/Header"
import Footer from "./Footer/Footer"
import Row from "components/Ui/Row/Row"
import Column from "components/Ui/Column/Column"
import SocialIcons from "components/HomePage/HomeHero/SocialIcons/SocialIcons"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer>
        <Row>
          <Column>
            <p>
              &copy; Joan Busquet {new Date().getFullYear()} · Made with{" "}
              <span className={classes.heart}>♥</span> in Barcelona
            </p>
          </Column>
          <Column>
            <SocialIcons />
          </Column>
        </Row>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}
