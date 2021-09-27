import Head from "next/head"

import Container from "components/Ui/Container/Container"
import Hero from "components/Ui/Hero/Hero"
import AboutSection from "components/SobreMi/AboutSection/AboutSection"

export default function SobreMiPage() {
  return (
    <>
      <Head>
        <title>Sobre mi | Joan Busquet</title>
        <meta
          name="description"
          content="Desarrollador profesional desde hace más de 13 años especializado en el ecosistema Javascript, React, NodeJS..."
        />
      </Head>
      <Hero title="Sobre mí"></Hero>
      <Container>
        <AboutSection title="Actualidad">
          <ul>
            <li>
              👨🏻‍💻 Trabajo en MANGO como Conversational AI Full Stack Engineer
              desarrollando proyectos para dar el mejor servicio a los clientes
              y desmarcándonos de la competencia.
            </li>
            <li>
              ⚛️ Mi stack favorito para desarrollar aplicaciones web es MERN
              Stack (MongoDB, Express, React y Node.js) y para páginas web, me
              encanta Next.js.
            </li>
            <li>🚀 Obsesionado con las buenas prácticas y el Clean Code.</li>
            <li>
              🧠 En esta página web comparto todos los conocimientos que voy
              absorbiendo a diario, ya que soy estoy obsesionado en ser la mejor
              versión de mí en todos los sentidos: productividad, desarrollo
              personal, soft skills... la mejor inversión que puedes hacer eres
              TÚ.
            </li>
          </ul>
        </AboutSection>
        <AboutSection title="Intereses">
          <ul>
            <li>
              💪🏻 Adicto a los hábitos saludables como el deporte y la nutrición.
            </li>
            <li>
              🏔 La montaña es mi refugio necesario para la desconexión de tantas
              líneas de código.
            </li>
            <li>📚 Leer a diario me hace ser cada día un 1% mejor que ayer.</li>
            <li>
              ♟️ El ajedrez hace concentrarme en disfrutar de cada una de las
              horas que le dedico.
            </li>
            <li>
              🎮 No hay nada más divertido que viciar a videojuegos shooters con
              los amigos los domingos por la tarde.
            </li>
          </ul>
        </AboutSection>
        <AboutSection title="¿Tomamos un café?">
          <ul>
            <li>
              📬 1. Email: Mándame un{" "}
              <a
                href="mailto:joan@joanbusquet.com"
                target="_BLANK"
                rel="noreferrer"
              >
                email
              </a>{" "}
              y hablamos. No voy a tardar mucho en contestar, lo prometo.
            </li>
            <li>
              ☕️ 2. RRSS: Accede a cualquiera de mis redes sociales y mándame
              un mensaje privado.
            </li>
            <li>
              🐦 3. Twitter: Si quieres decirme algo corto ({`<`}280 palabras),
              mándame un tuit a{" "}
              <a
                href="https://twitter.com/joanbusquet"
                target="_BLANK"
                rel="noreferrer"
              >
                @joanbusquet
              </a>
              .
            </li>
          </ul>
        </AboutSection>
      </Container>
    </>
  )
}
