import PropTypes from "prop-types"
import classes from "./Navigation.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

import NAVIGATION_ITEMS from "constants/navigation"

export default function Navigation({ mobileNav }) {
  return (
    <ul className={`${classes.navigation} ${!mobileNav && classes.hideMobile}`}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem key={item.slug} item={item} />
      ))}
    </ul>
  )
}

Navigation.propTypes = {
  mobileNav: PropTypes.bool,
}
