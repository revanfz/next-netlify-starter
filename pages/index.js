import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Revan Fauzi ALgifari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sm:)le!" />
        <p className="description">
          Nyoba aja <code>y</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
