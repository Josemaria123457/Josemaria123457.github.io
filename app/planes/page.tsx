import Link from "next/link";
import type { Metadata } from "next";
import styles from "./planes.module.css";

export const metadata: Metadata = {
  title: "Planes y precios • PINONET",
  description:
    "Planes de páginas web en MXN con enfoque en rendimiento y calidad. Paquete Estándar y Paquete Premium según necesidades del proyecto.",
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
              {/* Paquete Estándar (según PDF) */}
              <article className={`${styles.card} ${styles.tier}`}>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Estándar</span>
                  <h3 className={styles.cardTitle}>Sitio básico profesional</h3>
                  <p className={styles.cardSub}>Diseño personalizado con secciones esenciales y configuración inicial.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>$1,500–$2,000 <small>MXN</small></span>
                  <span className={styles.note}>Entrega desde 7 días</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Hasta 5 secciones (inicio, servicios, contacto, galería, etc.)</li>
                  <li>Diseño personalizado</li>
                  <li>Dominio personalizado</li>
                  <li>Alojamiento inicial</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Solicitar propuesta</a>
                  <Link className="btn" href="/#servicios">Ver detalles</Link>
                </div>
              </article>

              {/* Paquete Premium (según PDF) */}
              <article className={`${styles.card} ${styles.tier} ${styles.recommended}`} aria-label="Plan recomendado">
                <div className={styles.ribbon}>Recomendado</div>
                <header className={styles.cardHead}>
                  <span className={styles.kicker}>Premium</span>
                  <h3 className={styles.cardTitle}>Gestión y crecimiento continuo</h3>
                  <p className={styles.cardSub}>Todo lo del Estándar + mantenimiento y mejoras continuas.</p>
                </header>
                <div className={styles.priceRow}>
                  <span className={styles.price}>Desde $3,000 <small>MXN</small></span>
                  <span className={styles.note}>Plan mensual</span>
                </div>
                <ul className={styles.features} role="list">
                  <li>Incluye todo lo del Paquete Estándar</li>
                  <li>Mantenimiento mensual</li>
                  <li>Optimización SEO básica</li>
                  <li>Actualización de contenido</li>
                  <li>Soporte técnico continuo</li>
                </ul>
                <div className={styles.actions}>
                  <a className="btn primary" href="#contacto">Solicitar propuesta</a>
                  <Link className="btn" href="/#servicios">Ver detalles</Link>
                </div>
              </article>
            </div>

            <p className={styles.micro}>
              Costos estimados: pueden variar según alcance y requerimientos del proyecto.
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
                <div className={styles.th} role="columnheader">Estándar</div>
                <div className={styles.th} role="columnheader">Premium</div>
              </div>

              {[
                ["Diseño personalizado", "✓", "✓"],
                ["Hasta 5 secciones", "✓", "✓"],
                ["Dominio personalizado", "✓", "✓"],
                ["Alojamiento inicial", "✓", "✓"],
                ["Mantenimiento mensual", "—", "✓"],
                ["Optimización SEO básica", "—", "✓"],
                ["Actualización de contenido", "—", "✓"],
                ["Soporte técnico continuo", "—", "✓"],
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

      {/* ADD-ONS (opcional, mantenemos igual) */}
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
                <summary className={styles.faqQ}>¿Qué incluye el Paquete Estándar?</summary>
                <p className={styles.faqA}>
                  Hasta 5 secciones con diseño personalizado, dominio propio y alojamiento inicial. Ideal para iniciar con presencia sólida.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Qué agrega el Paquete Premium?</summary>
                <p className={styles.faqA}>
                  Todo lo del Estándar más mantenimiento mensual, SEO básico, actualización de contenido y soporte técnico continuo.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Los precios son fijos?</summary>
                <p className={styles.faqA}>
                  Son estimados y pueden variar según el alcance. Te compartimos una propuesta detallada antes de iniciar.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>¿Cómo es el proceso de pago?</summary>
                <p className={styles.faqA}>
                  Trabajamos con anticipo y contra-entrega. Emitimos factura en MX si la requieres.
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
              <Link className="btn" href="/#proceso">
                Ver proceso
              </Link>
            </div>
          </div>
        </div>
      </section>
            {/* CONTACTO */}
      <section id="contacto" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Hablemos de tu proyecto</h2>
            <p className="lead">Cuéntanos objetivos, plazos y referencias. Respondemos en menos de 24 h.</p>

            <div className="contact-wrap">
              {/* FORMULARIO */}
              <form
                id="contacto-form"
                className="card contact-form"
                action="https://formsubmit.co/contactanos@pinonet.me"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nueva solicitud PINONET" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <input type="hidden" name="_next" value="https://www.pinonet.me/gracias" />

                <div className="field">
                  <label htmlFor="c-nombre">Nombre <span className="req">*</span></label>
                  <input id="c-nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" />
                </div>

                <div className="row two">
                  <div className="field">
                    <label htmlFor="c-correo">Correo <span className="req">*</span></label>
                    <input id="c-correo" name="correo" type="email" required autoComplete="email" placeholder="tu@correo.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-whats">WhatsApp</label>
                    <input id="c-whats" name="whatsapp" inputMode="tel" placeholder="+54 954 121 0879" />
                  </div>
                </div>

                <div className="row two">
                  <div className="field">
                    <label htmlFor="c-tipo">Tipo de sitio</label>
                    <select id="c-tipo" name="tipo" defaultValue="">
                      <option value="" disabled>Elige una opción</option>
                      <option>Paquete estándar</option>
                      <option>Paquete Premium</option>
                      <option>personalizado</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="c-plazo">Plazo objetivo</label>
                    <select id="c-plazo" name="plazo" defaultValue="">
                      <option value="" disabled>Selecciona</option>
                      <option>1 semana</option>
                      <option>2–3 semanas</option>
                      <option>no definido</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="c-mensaje">Mensaje <span className="req">*</span></label>
                  <textarea
                    id="c-mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Objetivos, referencias y plazos"
                  />
                </div>

                <label className="check">
                  <input type="checkbox" name="acepta" required />
                  <span className="check-text">Acepto el tratamiento de mis datos.</span>
                </label>

                <button className="btn primary" type="submit">Solicitar propuesta</button>
                <p className="microcopy">
                  También puedes escribir a <a href="mailto:contactanos@pinonet.me">contactanos@pinonet.me</a> o por{" "}
                  <a href="https://wa.me/549541210879" target="_blank" rel="noopener">WhatsApp</a>.
                </p>
              </form>

              {/* INFO */}
              <aside className="card contact-info">
                <h3>Contacto directo</h3>
                <ul className="small info-list">
                  <li>Email: <a href="mailto:contactanos@pinonet.me">contactanos@pinonet.me</a></li>
                  <li>WhatsApp: <a href="https://wa.me/549541210879" target="_blank" rel="noopener">+54 954 121 0879</a></li>
                  <li>Horario: Lun–Sáb 10:00–18:00</li>
                  <li>Ubicación: Oaxaca, México (remoto a todo MX)</li>
                </ul>

                <div className="trust">
                  <h4>Confianza</h4>
                  <p>Más de 100 proyectos entregados con éxito.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
