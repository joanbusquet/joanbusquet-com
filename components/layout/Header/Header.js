import classes from "./Header.module.css"

import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.navigation}>
        <Navigation />
      </div>
    </header>
  )
}
