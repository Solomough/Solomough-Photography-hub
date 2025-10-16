---
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solomough Photography Hub — Out of Darkness to Light</title>
        <meta name="description" content="Solomon — Photography, training, and digital skills. Out of Darkness to Light." />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <Hero />
        <Services />
      </main>
    </div>
  )
}

---
