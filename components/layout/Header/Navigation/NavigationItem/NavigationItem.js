import PropTypes from "prop-types"
import classes from "./NavigationItem.module.css"

import Link from "next/link"
export default function NavigationItem({ item }) {
  return (
    <li className={classes.item}>
      <Link href={item.slug}>
        <a>{item.name}</a>
      </Link>
    </li>
  )
}

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
}
