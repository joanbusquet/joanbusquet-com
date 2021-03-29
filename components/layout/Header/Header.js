import { useState } from "react"

import Hamburguer from "components/icons/ui/Hamburguer"
import classes from "./Header.module.css"

import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false)

  const handleChangeNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <Logo />
          <Navigation mobileNav={mobileNav} />
          <Hamburguer
            className={classes.hamburguer}
            onClick={handleChangeNav}
          />
        </div>
      </header>
    </>
  )
}
