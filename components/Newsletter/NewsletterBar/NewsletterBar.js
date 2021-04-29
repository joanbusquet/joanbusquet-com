import classes from "./NewsletterBar.module.css"

// UI components
import Container from "components/Ui/Container/Container"
import Row from "components/Ui/Row/Row"
import Column from "components/Ui/Column/Column"
import SectionTitle from "components/Ui/SectionTitle/SectionTitle"
import Button from "components/Ui/Button/Button"

export default function NewsletterBar() {
  return (
    <section className={classes.newsletter}>
      <Container>
        <Row>
          <Column>
            <div className={classes.javasclub}>
              <SectionTitle title="Suscríbete a JavasClub Weekly" />
              <p>
                Cada domingo comparto contigo todas las novedades, curiosidades,
                proyectos y repositorios de Javascript directamente a tu email.
              </p>
            </div>
          </Column>
          <Column>
            <form>
              <input
                type="text"
                placeholder="Nombre"
                className={classes.input}
              />

              <input
                type="text"
                placeholder="Email"
                className={classes.input}
              />

              <Button text="Suscríbete GRATIS" />
            </form>
          </Column>
        </Row>
      </Container>
    </section>
  )
}
