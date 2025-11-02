// app/gracias/page.tsx
import Link from "next/link";
import styles from "./gracias.module.css";

export const metadata = {
  title: "Gracias | PINONET",
  description:
    "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas. Si es urgente, escríbenos por WhatsApp.",
  robots: { index: false },
  openGraph: {
    title: "Gracias | PINONET",
    description:
      "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.",
    url: "https://www.pinonet.me/gracias",
    siteName: "PINONET",
  },
};

export default function GraciasPage() {
  const whatsappHref =
    "https://wa.me/529532295158?text=Hola%20PINONET,%20acabo%20de%20enviar%20el%20formulario%20y%20quiero%20continuar%20mi%20proyecto.";

  return (
    <main className={styles.gxsRoot} aria-labelledby="gxs-title">
      {/* JSON-LD ligero */}
      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Gracias | PINONET",
            description:
              "Confirmación de contacto. Hemos recibido tu mensaje y te contactaremos pronto.",
            isPartOf: {
              "@type": "WebSite",
              name: "PINONET",
              url: "https://www.pinonet.me",
            },
          }),
        }}
      />

      <section className={styles.gxsContainer}>
        <article className={styles.gxsCard} role="status" aria-live="polite">
          {/* Encabezado */}
          <header className={styles.gxsHeader}>
            <div className={styles.gxsIcon} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1 id="gxs-title" className={styles.gxsTitle}>
              ¡Gracias! Recibimos tu mensaje
            </h1>
            <p className={styles.gxsLead}>
              Te contactaremos en <strong>&lt; 24 h</strong> con la propuesta
              inicial. Si tu proyecto es urgente, escríbenos por WhatsApp.
            </p>
          </header>

          {/* Bloques de valor */}
          <div className={styles.gxsGrid}>
            <section aria-labelledby="gxs-inc-title" className={styles.gxsBlock}>
              <h2 id="gxs-inc-title" className={styles.gxsBlockTitle}>
                Incluimos
              </h2>
              <ul className={styles.gxsList}>
                <li>Performance y SEO técnico</li>
                <li>Dominio y certificado SSL</li>
                <li>Diseño orientado a conversión</li>
              </ul>
            </section>

            <section aria-labelledby="gxs-time-title" className={styles.gxsBlock}>
              <h2 id="gxs-time-title" className={styles.gxsBlockTitle}>
                Tiempo estimado
              </h2>
              <ul className={styles.gxsList}>
                <li>Kickoff: 24–48 h</li>
                <li>Primer borrador: 3–7 días</li>
                <li>Ajustes finales: 1–3 días</li>
              </ul>
            </section>
          </div>

          {/* Próximos pasos */}
          <section className={styles.gxsSteps} aria-labelledby="gxs-steps-title">
            <h2 id="gxs-steps-title" className={styles.gxsSectionTitle}>
              Próximos pasos
            </h2>
            <ol className={styles.gxsOl}>
              <li>Revisamos tu mensaje y te enviamos 2–3 opciones.</li>
              <li>Coordinamos una llamada breve si hace falta.</li>
              <li>Compartimos propuesta con tiempos y presupuesto.</li>
            </ol>
          </section>

          {/* CTAs */}
          <div className={styles.gxsCtas}>
            <Link
              href="/"
              className={`${styles.gxsBtn} ${styles.gxsBtnSecondary}`}
              aria-label="Volver al inicio"
            >
              ← Volver al inicio
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.gxsBtn} ${styles.gxsBtnPrimary}`}
              aria-label="Escribir por WhatsApp"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>

          {/* Cintillo de confianza */}
          <section className={styles.gxsTrust} aria-label="Confianza">
            <div className={styles.gxsTrustRow}>
              <span className={styles.gxsPill}>SSL y seguridad</span>
              <span className={styles.gxsPill}>Mejores prácticas SEO</span>
              <span className={styles.gxsPill}>Soporte cercano</span>
            </div>
          </section>

          {/* FAQ accesible */}
          <section className={styles.gxsFaq} aria-labelledby="gxs-faq-title">
            <h2 id="gxs-faq-title" className={styles.gxsSectionTitle}>
              Preguntas frecuentes
            </h2>

            <details className={styles.gxsQa}>
              <summary>¿Cuándo me contactan?</summary>
              <div className={styles.gxsQaA}>
                En horario laboral, respondemos normalmente en menos de 24 horas.
                Si es urgente, WhatsApp es la vía más rápida.
              </div>
            </details>

            <details className={styles.gxsQa}>
              <summary>¿Qué información adicional necesitan?</summary>
              <div className={styles.gxsQaA}>
                Referencias de diseño, funcionalidades clave y cualquier
                contenido (textos/fotos) que ya tengas nos ayuda a acelerar.
              </div>
            </details>

            <details className={styles.gxsQa}>
              <summary>¿Ofrecen pago por etapas?</summary>
              <div className={styles.gxsQaA}>
                Sí. Normalmente 50% al inicio y 50% a la entrega. Podemos
                adaptarlo según el alcance del proyecto.
              </div>
            </details>
          </section>

          <footer className={styles.gxsFooter}>
            PINONET • Sitios web rápidos, seguros y orientados a conversión.
          </footer>
        </article>
      </section>
    </main>
  );
}
