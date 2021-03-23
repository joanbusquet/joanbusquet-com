import Image from "next/image"
import classes from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Image src="/images/ui/logo.png" width={640} height={262} />
    </div>
  )
}
