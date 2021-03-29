import Image from "next/image"

import Container from "components/ui/Container/Container"
import SocialIcons from "./socialIcons/SocialIcons"

import classes from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={classes.hero}>
      <Container flex>
        <div className={classes.image}>
          <Image
            src="/images/pages/hero.png"
            alt="joan busquet"
            width={150}
            height={150}
          />
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>¡Hola, soy Joan!</h1>
          <p className={classes.text}>
            Desarrollador web fullstack desde hace más de 12 años. <br />
            Apasionado del ecosistema Javascript y del web performance. <br />
          </p>
        </div>
      </Container>
      <SocialIcons />
    </section>
  )
}
