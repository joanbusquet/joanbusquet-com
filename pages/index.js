import Head from "next/head"

import Hero from "components/hero/Hero"
import SocialIcons from "components/socialIcons/SocialIcons"
import SectionTitle from "components/ui/SectionTitle/SectionTitle"
import PostsList from "components/postsList/PostsList"

// Dummy data
const POSTS = [
  {
    key: 1,
    category: "react",
    color: "#00ccff",
    title: "Lorem ipsum dolor sit en ReactJS para Context API",
    date: "2021-02-24",
    image: "/images/categories/react.png",
    time: 8,
  },
  {
    key: 2,
    category: "javascript",
    color: "#f7df1e",
    title: "ECMASCRIPT 6 release date sit amet",
    date: "2021-02-6",
    image: "/images/categories/javascript.png",
    time: 3,
  },
  {
    key: 3,
    category: "svelte",
    color: "#ff3e00",
    title: "¿Cómo crear una PWA con Svelte 2.0?",
    date: "2021-02-2",
    image: "/images/categories/svelte.png",
    time: 7,
  },
  {
    key: 4,
    category: "javascript",
    color: "#f7df1e",
    title: "Configuración de Eslint y Prettier en Javascript",
    date: "2021-02-1",
    image: "/images/categories/javascript.png",
    time: 1,
  },
  {
    key: 5,
    category: "tailwindcss",
    color: "#47acb3",
    title: "Guía de estilos de Tailwind CSS versión 2.0",
    date: "2021-01-22",
    image: "/images/categories/tailwindcss.png",
    time: 14,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ▷ Desarrollo web Javascript y rendimiento web | Joan Busquet
        </title>
        <meta
          name="description"
          content="Aprende desarrollo web Javascript, React, librerías, frameworks, rendimiento web, SEO, CSS... totalmente GRATIS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SocialIcons />
      <SectionTitle title="Últimos artículos" />
      <PostsList posts={POSTS} />
    </>
  )
}
