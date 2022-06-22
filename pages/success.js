import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Asociacion DTL (Pagina provisional)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Formulario enviado!</h1>
        <p>Gracias por tu feedback. Haz click para volver a la <Link href="/"><a>pagina principal</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
