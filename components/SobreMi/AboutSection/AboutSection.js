import PropTypes from "prop-types"
import classes from "./AboutSection.module.css"

import SectionTitle from "components/Ui/SectionTitle/SectionTitle"

export default function AboutSection({ title, children }) {
  return (
    <section className={classes.about}>
      <SectionTitle title={title} />
      {children}
    </section>
  )
}

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}
