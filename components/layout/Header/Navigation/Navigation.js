import classes from "./Navigation.module.css"
import Hamburguer from "components/icons/ui/Hamburguer"

export default function Navigation() {
  return (
    <div className={classes.navigation}>
      <Hamburguer className={classes.icon} />
    </div>
  )
}
