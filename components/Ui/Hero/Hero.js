import PropTypes from "prop-types"
import Container from "components/Ui/Container/Container"

import classes from "./Hero.module.css"
import Wave from "components/Ui/Wave/Wave"

export default function Hero({ title, children }) {
  return (
    <>
      <section className={classes.hero}>
        <Container>
          <div className={classes.content}>
            <h1 className={classes.title}>{title}</h1>
            {children}
          </div>
        </Container>
      </section>
      <Wave className={classes.wave} />
    </>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}
