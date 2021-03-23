import Head from "next/head"

import Hero from "components/hero/Hero"
import SocialIcons from "components/socialIcons/socialIcons"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SocialIcons />
    </>
  )
}
