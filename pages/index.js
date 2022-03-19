import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Revan Fauzi Algifari</title>
        <link rel="icon" href="/chara.ico" />
      </Head>

      <main>
        <Header title="Sm:)le!" />
        <p className="description">
          Nyoba aja <br><code>BANG</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
