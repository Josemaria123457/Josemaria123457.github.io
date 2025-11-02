import Head from "next/head";
import Link from "next/link";

export default function Gracias() {
  return (
    <>
      <Head>
        <title>Gracias | PINONET</title>
        <meta
          name="description"
          content="Tu mensaje fue enviado. Te contactaremos en menos de 24 horas."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="gracias-container">
        <div className="gracias-card">
          <div className="gracias-header">
            <div className="gracias-icon">✔</div>
            <h1>¡Gracias! Recibimos tu mensaje</h1>
          </div>

          <p className="gracias-text">
            Te contactaremos en menos de <strong>24 horas</strong>.  
            Si tu proyecto es urgente, escríbenos directamente por WhatsApp
            para acelerar la propuesta.
          </p>

          <div className="gracias-info">
            <div className="gracias-block">
              <h3>Incluimos</h3>
              <ul>
                <li>Performance y SEO técnico</li>
                <li>Dominio y certificado SSL</li>
                <li>Diseño orientado a conversión</li>
              </ul>
            </div>
            <div className="gracias-block">
              <h3>Tiempo estimado</h3>
              <ul>
                <li>Kickoff: 24–48 h</li>
                <li>Primer borrador: 3–7 días</li>
                <li>Ajustes finales: 1–3 días</li>
              </ul>
            </div>
          </div>

          <div className="gracias-buttons">
            <Link href="/" className="btn btn-secondary">
              ← Volver al inicio
            </Link>
            <a
              href="https://wa.me/529532295158?text=Hola%20PINONET,%20acabo%20de%20enviar%20el%20formulario%20y%20quiero%20continuar%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>

          <footer className="gracias-footer">
            PINONET • Sitios web rápidos, seguros y orientados a conversión.
          </footer>
        </div>
      </main>
    </>
  );
}
