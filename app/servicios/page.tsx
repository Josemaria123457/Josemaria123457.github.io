// app/servicios/page.tsx
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import styles from "./Servicios.module.css";

export const metadata: Metadata = {
  title: "Servicios • PINONET",
  description:
    "Servicios de diseño y desarrollo web enfocados en rendimiento, SEO y conversión: landing pages, sitios corporativos, e-commerce, rediseño y migración.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios • PINONET",
    description:
      "Diseño y desarrollo web rápidos, seguros y orientados a conversión.",
    url: "https://pinonet.me/servicios",
    siteName: "PINONET",
    type: "website",
  },
};

export default function PageServicios() {
  // JSON-LD (SEO)
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PINONET",
    url: "https://pinonet.me/",
    description:
      "Diseño y desarrollo de sitios web rápidos, seguros y orientados a conversión.",
    areaServed: "MX",
    email: "hola@pinonet.me",
    telephone: "+52 953 229 5158",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oaxaca",
      addressCountry: "MX",
    },
    knowsAbout: [
      "landing pages",
      "sitios corporativos",
      "e-commerce",
      "SEO técnico",
      "web performance",
    ],
    sameAs: ["https://wa.me/529532295158"],
  };

  return (
    <div className={styles.page}>
      <Script id="pn-ld" type="application/ld+json">
        {JSON.stringify(ld)}
      </Script>


      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero} id="top">
          <p className={styles.eyebrow}>
            <span className={styles.badge}>
              Web performance • SEO • Conversión
            </span>
          </p>
          <h1 className={styles.heroTitle}>
            Servicios de diseño y desarrollo web orientados a{" "}
            <span className={styles.accent}>resultados</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Paquetes flexibles para negocios locales, emprendedores y pymes.
            Entregas rápidas, SEO técnico, analítica y soporte con enfoque en
            rendimiento y conversión.
          </p>

          <div className={styles.tags} aria-label="beneficios">
            <span className={styles.tag}>Entrega desde 7 días</span>
            <span className={styles.tag}>+95 performance</span>
            <span className={styles.tag}>SSL y dominio</span>
            <span className={styles.tag}>Soporte incluido</span>
          </div>

          <div className={styles.highlights} role="list" aria-label="atributos">
            <div className={styles.highlight} role="listitem">
              <strong>7 días</strong>
              <span>Entrega rápida</span>
            </div>
            <div className={styles.highlight} role="listitem">
              <strong>+95</strong>
              <span>Puntuación de performance</span>
            </div>
            <div className={styles.highlight} role="listitem">
              <strong>SSL</strong>
              <span>Seguridad incluida</span>
            </div>
            <div className={styles.highlight} role="listitem">
              <strong>Soporte</strong>
              <span>Acompañamiento post-lanzamiento</span>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section} id="servicios" aria-labelledby="t-servicios">
          <h2 className={styles.sectionTitle} id="t-servicios">
            Paquetes de servicio
          </h2>
          <div className={styles.grid}>
            <ServiceCard
              eyebrowIcon={<ListIcon />}
              eyebrow="Landing de alto impacto"
              title="Captura clientes con claridad"
              desc="Página enfocada en un objetivo: convertir. Mensaje claro, CTA visible, WhatsApp y métricas listas."
              features={[
                "Copy orientado a conversión",
                "Integración WhatsApp + eventos",
                "SEO técnico base",
              ]}
              price="$2,900 MXN"
              primaryHref="#contacto"
              secondaryHref="#faq"
              secondaryLabel="Ver preguntas"
            />

            <ServiceCard
              eyebrowIcon={<BuildingIcon />}
              eyebrow="Sitio corporativo 3–5 secciones"
              title="Presencia sólida y escalable"
              desc="Inicio, servicios, sobre nosotros, contacto y blog opcional. Rendimiento y SEO listos."
              features={["CMS ligero y seguro", "Accesibilidad AA", "Analítica + funnels"]}
              price="$7,900 MXN"
              primaryHref="#contacto"
              secondaryHref="#proceso"
              secondaryLabel="Ver proceso"
            />

            <ServiceCard
              eyebrowIcon={<CartIcon />}
              eyebrow="Tienda en línea básica"
              title="Vende en digital sin complicarte"
              desc="Catálogo inicial, checkout integrado y capacitación para administrar productos."
              features={[
                "Pasarelas de pago confiables",
                "Administración sencilla",
                "Preparado para escalar",
              ]}
              price="$10,900 MXN"
              primaryHref="#contacto"
              secondaryHref="#faq"
              secondaryLabel="Dudas frecuentes"
            />

            <ServiceCard
              eyebrowIcon={<LayoutIcon />}
              eyebrow="Rediseño & migración"
              title="De Wix/WordPress a velocidad real"
              desc="Migramos sin caídas a un stack moderno, seguro y fácil de mantener."
              features={["0 interrupciones", "Mantenimiento simple", "Seguridad reforzada"]}
              price="Plan a medida"
              primaryHref="#contacto"
              primaryLabel="Evaluar mi migración"
              secondaryHref="#proceso"
              secondaryLabel="Cómo trabajamos"
            />
          </div>
        </section>

        {/* PROCESO */}
        <section className={styles.section} id="proceso" aria-labelledby="t-proceso">
          <h2 className={styles.sectionTitle} id="t-proceso">
            Nuestro proceso
          </h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <strong>1. Análisis (Brief)</strong>
              <p>Objetivos, referencias visuales y contenido. Alineamos metas y plazos.</p>
            </div>
            <div className={styles.step}>
              <strong>2. Prototipo</strong>
              <p>Wireframe y propuesta visual para validar la estructura y el tono.</p>
            </div>
            <div className={styles.step}>
              <strong>3. Desarrollo</strong>
              <p>Implementación responsive, SEO técnico, eventos de analítica y QA.</p>
            </div>
            <div className={styles.step}>
              <strong>4. Lanzamiento</strong>
              <p>Entrega con dominio, SSL, optimizaciones finales y soporte post-lanzamiento.</p>
            </div>
          </div>
          <div className={styles.kpi}>
            <div>⏱️ <strong>7 días</strong> promedio landing</div>
            <div>⚡ <strong>+95</strong> performance</div>
            <div>🔒 <strong>SSL</strong> incluido</div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} id="faq" aria-labelledby="t-faq">
          <h2 className={styles.sectionTitle} id="t-faq">
            Preguntas frecuentes
          </h2>
          <div className={styles.faq}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>¿Qué necesito para empezar?</summary>
              <p className={styles.faqA}>
                Logotipo y contenido básico (texto e imágenes). Si no los tienes, te guiamos paso a paso para crearlos.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>¿Incluye SEO?</summary>
              <p className={styles.faqA}>
                Sí, configuración técnica inicial: metadatos, sitemap, etiquetas OG y performance base.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>¿Cómo se mide el resultado?</summary>
              <p className={styles.faqA}>
                Configuramos analítica con eventos (clicks, leads, ventas) y te entregamos un tablero de métricas clave.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>¿Puedo crecer después?</summary>
              <p className={styles.faqA}>
                Claro. El stack es modular: puedes sumar secciones, blog, catálogo o integraciones sin rehacer el sitio.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section} id="contacto" aria-labelledby="t-contacto">
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.noMargin} id="t-contacto">
                ¿Listo para empezar?
              </h2>
              <p className={`${styles.noMargin} ${styles.muted}`}>
                Cuéntanos objetivos, plazos y referencias. Respondemos en &lt; 24 h.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a
                className={`${styles.btn} ${styles.primary}`}
                href="https://wa.me/529532295158"
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
              >
                Escríbenos por WhatsApp
              </a>
              <a className={styles.btn} href="mailto:hola@pinonet.me" data-cta="email">
                Enviar correo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* -------- Componentes locales -------- */
function ServiceCard(props: {
  eyebrowIcon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  features: string[];
  price: string;
  primaryHref: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const {
    eyebrowIcon,
    eyebrow,
    title,
    desc,
    features,
    price,
    primaryHref,
    primaryLabel = "Solicitar cotización",
    secondaryHref,
    secondaryLabel,
  } = props;

  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.eyebrow}>
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.muted}>{desc}</p>
        <ul className={styles.features}>
          {features.map((f, i) => (
            <li key={i} className={styles.feature}>
              <Check /> {f}
            </li>
          ))}
        </ul>
        <div className={styles.price}>
          <strong>{price}</strong>
          {price.includes("MXN") && <span className={styles.muted}> (desde)</span>}
        </div>
        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.primary}`} href={primaryHref} data-cta="card-primary">
            {primaryLabel}
          </a>
          {secondaryHref && (
            <a className={`${styles.btn} ${styles.ghost}`} href={secondaryHref} data-cta="card-secondary">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5 10 17l9-11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16M4 17h10M4 7h16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5h18l-2 10H5L3 5Zm4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function LayoutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h16v6H4zM4 14h10v6H4z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
