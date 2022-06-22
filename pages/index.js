import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Asociacion DTL (Pagina provisional)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Asociacion DTL (Pagina provisional)" />
        <hr />
        <p className="description">
          Si tienes alguna duda puedes rellenar este formulario con tus preguntas, o si necesitas informacion adicional, y te responderemos lo antes posible.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
