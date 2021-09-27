import Image from "next/image"

import Container from "components/Ui/Container/Container"
import SocialIcons from "./SocialIcons/SocialIcons"

import classes from "./HomeHero.module.css"
import Wave from "../../Ui/Wave/Wave"

export default function HomeHero() {
  return (
    <>
      <section className={classes.hero}>
        <Container flex>
          <div className={classes.content}>
            <h1 className={classes.title}>¡Hola, soy Joan!</h1>
            <p className={classes.text}>
              Desarrollador fullstack desde hace más de 13 años apasionado del
              ecosistema Javascript y del web performance.
            </p>
            <p className={classes.text}>
              En esta página aprenderás Javascript, frameworks, librerias, UI/UX
              y mucho más.
            </p>
            <p className={classes.text}>
              Te invito a echar un vistazo al contenido de la página.
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
      <Wave className={classes.wave} />
    </>
  )
}
