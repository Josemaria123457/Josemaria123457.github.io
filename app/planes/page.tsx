import Link from "next/link";
import type { Metadata } from "next";
import styles from "./planes.module.css";

export const metadata: Metadata = {
  title: "Planes y precios • PINONET",
  description:
    "Planes de páginas web en MXN: landing, sitio corporativo, e-commerce y migraciones. Rendimiento, SEO y soporte incluidos.",
  alternates: { canonical: "/planes" },
};

export default function PagePlanes() {
  return (
    <>
      {/* HERO */}
      <section className="band-1" aria-labelledby="t-planes">
        <div className="container">
          <div className={`surface ${styles.hero}`}>
            <div className={styles.heroText}>
              <span className="eyebrow">Transparencia • Rendimiento • Soporte</span>
              <h1 id="t-planes" className={styles.title}>
                Planes y precios
              </h1>
              <p className="lead">
                Elige el paquete que mejor se adapte a tu proyecto. Todos nuestros planes incluyen SEO técnico base, analítica
                y acompañamiento para lanzar con confianza.
              </p>
              <div className={styles.heroActions}>
                <Link className="btn primary" href="#precios">Ver planes</Link>
                <a className="btn" href="#faq">Dudas frecuentes</a>
              </div>
              <ul className={styles.heroBullets} role="list" aria-label="Incluye en todos los planes">
                <li>⚡ Performance optimizado</li>
                <li>🔒 SSL & mejores prácticas</li>
                <li>📈 Analítica con eventos</li>
              </ul>
            </div>
            <div className={styles.heroBadge} aria-hidden>
              <div className={styles.badgeCircle}>
                <div className={styles.badgeInner}>+95</div>
                <span className={styles.badgeLabel}>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="precios" className="band-2" aria-labelledby="t-precios">
        <div className="container">
          <div className="surface">
            <h2 id="t-precios" className={styles.h2}>Elige tu plan</h2>
            <p className="lead">Facturación en MXN. Personalizamos cualquier plan a tus necesidades.</p>

            <div className={styles.grid}>
              {/* Landing */}
              <article className={`${styles.card} ${styles.tier}`}>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Emprende</span>
                  <h3 className={styles.cardTitle}>Landing de alto impacto</h3>
                  <p className={styles.cardSub}>Ideal para captar clientes con un solo objetivo.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>$2,900 <small>MXN</small></span>
                  <span className={styles.note}>(promedio 7 días)</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Copy orientado a conversión</li>
                  <li>WhatsApp/CTA + eventos</li>
                  <li>SEO técnico base</li>
                  <li>1 mes de soporte</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Solicitar propuesta</a>
                  <Link className="btn" href="/#servicios">Ver detalles</Link>
                </div>
              </article>

              {/* Corporativo */}
              <article className={`${styles.card} ${styles.tier} ${styles.recommended}`} aria-label="Plan recomendado">
                <div className={styles.ribbon}>Recomendado</div>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Negocio</span>
                  <h3 className={styles.cardTitle}>Sitio 3–5 secciones</h3>
                  <p className={styles.cardSub}>Presencia sólida con base escalable y blog opcional.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>$7,900 <small>MXN</small></span>
                  <span className={styles.note}>Dominio + hosting 1er año*</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Inicio, servicios, sobre nosotros y contacto</li>
                  <li>Analítica con funnels</li>
                  <li>Accesibilidad AA</li>
                  <li>2 meses de soporte</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Solicitar propuesta</a>
                  <Link className="btn" href="/#servicios">Ver detalles</Link>
                </div>
              </article>

              {/* E-commerce */}
              <article className={`${styles.card} ${styles.tier}`}>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Vende online</span>
                  <h3 className={styles.cardTitle}>E-commerce inicial</h3>
                  <p className={styles.cardSub}>Catálogo base y checkout integrado para empezar a vender.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>$10,900 <small>MXN</small></span>
                  <span className={styles.note}>Escalable por módulos</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Pasarelas de pago confiables</li>
                  <li>Administración sencilla</li>
                  <li>Capacitación incluida</li>
                  <li>3 meses de soporte</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Solicitar propuesta</a>
                  <Link className="btn" href="/#servicios">Ver detalles</Link>
                </div>
              </article>

              {/* Migración */}
              <article className={`${styles.card} ${styles.tier}`}>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Upgrade</span>
                  <h3 className={styles.cardTitle}>Rediseño & migración</h3>
                  <p className={styles.cardSub}>De Wix/WordPress a un stack moderno, rápido y seguro.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>Plan a medida</span>
                  <span className={styles.note}>Sin caídas • Seguridad reforzada</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Auditoría técnica inicial</li>
                  <li>Migración sin interrupciones</li>
                  <li>Mejoras de performance</li>
                  <li>Mantenimiento simple</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Evaluar mi migración</a>
                  <Link className="btn" href="/#proceso">Cómo trabajamos</Link>
                </div>
              </article>
            </div>

            <p className={styles.micro}>
              *Dominio y hosting incluidos el primer año en planes Negocio y E-commerce. Renovación con coste preferente.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="band-1" aria-labelledby="t-compare">
        <div className="container">
          <div className="surface">
            <h2 id="t-compare" className={styles.h2}>Comparativa rápida</h2>

            <div className={styles.table} role="table" aria-label="Comparativa de planes">
              <div className={styles.tr} role="row">
                <div className={`${styles.th} ${styles.sticky}`} role="columnheader">Incluye</div>
                <div className={styles.th} role="columnheader">Landing</div>
                <div className={styles.th} role="columnheader">3–5 secciones</div>
                <div className={styles.th} role="columnheader">E-commerce</div>
                <div className={styles.th} role="columnheader">Migración</div>
              </div>

              {[
                ["Copy & diseño", "✓", "✓", "✓", "✓"],
                ["SEO técnico base", "✓", "✓", "✓", "✓"],
                ["Analítica con eventos", "✓", "✓", "✓", "✓"],
                ["Blog/CMS", "—", "Opcional", "Opcional", "Opcional"],
                ["Pago en línea", "—", "—", "✓", "Opcional"],
                ["Dominio + hosting 1er año", "—", "✓", "✓", "Opcional"],
                ["Soporte inicial", "1 mes", "2 meses", "3 meses", "A medida"],
              ].map((row, i) => (
                <div className={`${styles.tr} ${i % 2 ? styles.alt : ""}`} role="row" key={i}>
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <div className={`${styles.td} ${styles.sticky}`} role="rowheader" key={j}>{cell}</div>
                    ) : (
                      <div className={styles.td} role="cell" key={j}>{cell}</div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="band-2" aria-labelledby="t-addons">
        <div className="container">
          <div className="surface">
            <h2 id="t-addons" className={styles.h2}>Extras opcionales</h2>
            <div className={styles.addons}>
              <div className={styles.addon}>
                <div className={styles.addonIcon} aria-hidden>📝</div>
                <div>
                  <div className={styles.addonTitle}>Blog / CMS</div>
                  <div className={styles.addonDesc}>Publica artículos y casos de éxito con editor amigable.</div>
                </div>
              </div>
              <div className={styles.addon}>
                <div className={styles.addonIcon} aria-hidden>🚀</div>
                <div>
                  <div className={styles.addonTitle}>SEO on-page extra</div>
                  <div className={styles.addonDesc}>Contenido optimizado, interlinking y esquema.</div>
                </div>
              </div>
              <div className={styles.addon}>
                <div className={styles.addonIcon} aria-hidden>🧪</div>
                <div>
                  <div className={styles.addonTitle}>A/B testing</div>
                  <div className={styles.addonDesc}>Pruebas de CTA, copys y layouts para maximizar conversión.</div>
                </div>
              </div>
              <div className={styles.addon}>
                <div className={styles.addonIcon} aria-hidden>🛡️</div>
                <div>
                  <div className={styles.addonTitle}>Soporte extendido</div>
                  <div className={styles.addonDesc}>Paquetes mensuales de soporte y mejoras continuas.</div>
                </div>
              </div>
            </div>
            <p className="small" style={{ marginTop: 8 }}>
              ¿Necesitas algo más? ¡Cuéntanos y lo sumamos como módulo!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="band-1" aria-labelledby="t-faq">
        <div className="container">
          <div className="surface">
            <h2 id="t-faq" className={styles.h2}>Preguntas frecuentes</h2>
            <div className={styles.faq}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Qué necesito para empezar?</summary>
                <p className={styles.faqA}>
                  Tu logotipo y contenido básico (texto e imágenes). Si no los tienes, te guiamos paso a paso para crearlos.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Incluye SEO?</summary>
                <p className={styles.faqA}>
                  Sí, configuración técnica inicial: metadatos, sitemap, etiquetas OG y performance base.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Puedo crecer luego?</summary>
                <p className={styles.faqA}>
                  Claro. El stack es modular: podemos sumar secciones, blog, catálogo o integraciones sin rehacer el sitio.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Cómo se paga?</summary>
                <p className={styles.faqA}>
                  Trabajamos con anticipo y contra-entrega. Emitimos factura MX si la necesitas.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="band-2" aria-labelledby="t-cta">
        <div className="container">
          <div className={`surface ${styles.cta}`}>
            <div>
              <h2 id="t-cta" className={styles.ctaTitle}>¿Listo para empezar?</h2>
              <p className={styles.ctaSub}>Cuéntanos objetivos, plazos y referencias. Respondemos en &lt; 24 h.</p>
            </div>
            <div className={styles.ctaActions}>
              <a
                className="btn primary"
                href="https://wa.me/549541210879"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn" href="mailto:contactanos@pinonet.me">
                Escribir correo
              </a>
              <Link className="btn" href="/#proceso">
                Ver proceso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
