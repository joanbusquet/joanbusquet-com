import Image from "next/image"

import classes from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/pages/hero.png" width={150} height={150} />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>¡Hola, soy Joan!</h2>
        <div className={classes.text}>
          Desarrollador web fullstack desde hace más de 12 años. <br />
          Apasionado del ecosistema Javascript y web performance. <br />
        </div>
      </div>
    </div>
  )
}
