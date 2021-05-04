import Head from "next/head"

import Container from "components/Ui/Container/Container"
import Hero from "components/Ui/Hero/Hero"
import AboutSection from "components/SobreMi/AboutSection/AboutSection"

export default function SobreMiPage() {
  return (
    <>
      <Head>
        <title>▷ Sobre mi | Joan Busquet</title>
        <meta
          name="description"
          content="Desarrollador web profesional desde hace más de 12 años especializado en el ecosistema Javascript, React, NodeJS..."
        />
      </Head>
      <Hero title="Sobre mí">
        <p>{`Soy desarrollador web full stack desde hace más de 13 años.`}</p>
        <p>
          {`De niño jugaba a crear páginas web con HTML y CSS con el bloc de notas. Me encantaba el <marquee>, el Dreamweaver y el Flash.`}
        </p>
      </Hero>
      <Container>
        <AboutSection title="Actualidad">
          <ul>
            <li>
              👨🏻‍💻 Trabajo en Gestinet como desarrollador senior full stack y
              también realizo funciones de project manager gestionando el equipo
              de desarrollo.
            </li>
            <li>
              ⚛️ Mi stack favorito para desarrollar aplicaciones web es MERN
              Stack (MongoDB, Express, React y Node.js) y para páginas web, me
              encanta Next.js.
            </li>
            <li>
              🚀 Obsesionado con las buenas prácticas y el rendimiento web. Ver
              Lighthouse al 100 es una sensación muy satisfactoria del trabajo
              bien hecho.
            </li>
            <li>
              👨🏻‍🏫 En mi canal de Youtube subo cursos GRATIS de desarrollo web y
              contenidos relacionados con el ecosistema de Javascript dónde
              podrás aprender mucho.
            </li>
            <li>
              📨 Cada semana envío una newsletter con las noticias,
              curiosidades, proyectos y repositorios más interesantes. ¡No te lo
              pierdas, suscríbete!
            </li>
            <li>
              🧠 En esta página web comparto tutoriales interesantes sobre los
              lenguajes de desarrollo web que más me gustan y todo lo que
              aprendo a diario sobre programación y soft skills.
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
            <li>
              📚 Leer a diario me hacer ser cada día un 1% mejor que ayer.
            </li>
            <li>
              🎸 Cuando tengo tiempo libre toco canciones de rock y heavy con mi
              guitarra eléctrica.
            </li>
            <li>
              🎮 No hay nada más divertido que viciar a videojuegos shooters con
              los amigos los fines de semana.
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
