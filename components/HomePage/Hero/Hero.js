import Image from "next/image"

import Container from "components/Ui/Container/Container"
import SocialIcons from "./socialIcons/SocialIcons"

import classes from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={classes.hero}>
      <Container flex>
        <div className={classes.content}>
          <h1 className={classes.title}>¡Hola, soy Joan!</h1>
          <p className={classes.text}>
            Desarrollador web fullstack desde hace más de 12 años.
          </p>
          <p className={classes.text}>
            Apasionado del ecosistema Javascript y del web performance.
          </p>
          <p className={classes.text}>
            Quis deserunt Lorem excepteur qui eiusmod sunt incididunt id velit
            sunt deserunt quis consequat. Anim est incididunt ea velit magna in
            laboris dolore.
          </p>
          <SocialIcons />
        </div>

        <div className={classes.video}>
          <Image
            src="/images/pages/homePage/hero.jpg"
            alt="joan busquet"
            width={1000}
            height={667}
          />
        </div>
      </Container>
    </section>
  )
}
