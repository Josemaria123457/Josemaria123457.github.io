import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className="band-2" aria-labelledby="t-404">
      <div className="container">
        <div className={`surface ${styles.box}`}>
          {/* Ilustración decorativa suave */}
          <div className={styles.illustration} aria-hidden>
            <svg viewBox="0 0 200 200" width="140" height="140">
              <defs>
                <radialGradient id="halo" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.38" />
                  <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#halo)" />
              <g stroke="#2b3a57" strokeWidth="2" strokeLinecap="round">
                <path d="M70 70 L130 130" />
                <path d="M130 70 L70 130" />
              </g>
            </svg>
          </div>

          <h1 id="t-404" className={styles.title}>Página no encontrada</h1>
          <p className="lead" style={{ opacity: 0.9 }}>
            La ruta que intentaste abrir no existe o cambió de lugar. Elige una opción para continuar.
          </p>

          {/* Acciones principales */}
          <div className={styles.actions}>
            <Link className="btn primary" href="/">Volver al inicio</Link>
            <Link className="btn" href="/servicios">Ver servicios</Link>
            <Link className="btn" href="/#contacto">Contactar</Link>
          </div>

          {/* Motivos frecuentes */}
          <div className={styles.tips}>
            <h2 className={styles.h2}>Posibles motivos</h2>
            <ul className={styles.tipList} role="list">
              <li className={styles.tipItem}>La URL contiene un error tipográfico.</li>
              <li className={styles.tipItem}>El contenido fue renombrado o movido.</li>
              <li className={styles.tipItem}>El enlace es antiguo o ya no está disponible.</li>
            </ul>
          </div>

          {/* Enlaces rápidos (anclas internas a tu home) */}
          <nav className={styles.quicklinks} aria-label="Secciones principales">
            <Link className={styles.quick} href="/#servicios">Servicios</Link>
            <Link className={styles.quick} href="/#planes">Planes y precios</Link>
            <Link className={styles.quick} href="/#portafolio">Portafolio</Link>
            <Link className={styles.quick} href="/#faq">Preguntas frecuentes</Link>
          </nav>

          {/* Tarjetas “quizás buscabas” (sin imágenes para evitar warnings) */}
          <div className={styles.miniCards} role="list">
            <Link href="/servicios" className={styles.miniCard} role="listitem" aria-label="Ir a Servicios">
              <div className={styles.miniIcon} aria-hidden>🧰</div>
              <div>
                <div className={styles.miniTitle}>Servicios</div>
                <div className={styles.miniDesc}>Landing, sitio corporativo, e-commerce, migraciones.</div>
              </div>
            </Link>

            <Link href="/#planes" className={styles.miniCard} role="listitem" aria-label="Ver planes y precios">
              <div className={styles.miniIcon} aria-hidden>💳</div>
              <div>
                <div className={styles.miniTitle}>Planes y precios</div>
                <div className={styles.miniDesc}>Paquetes claros y personalizables en MXN.</div>
              </div>
            </Link>

            <Link href="/#portafolio" className={styles.miniCard} role="listitem" aria-label="Ver portafolio">
              <div className={styles.miniIcon} aria-hidden>🖼️</div>
              <div>
                <div className={styles.miniTitle}>Portafolio</div>
                <div className={styles.miniDesc}>Trabajos recientes entregados a clientes.</div>
              </div>
            </Link>

            <Link href="/#contacto" className={styles.miniCard} role="listitem" aria-label="Ir a contacto">
              <div className={styles.miniIcon} aria-hidden>✉️</div>
              <div>
                <div className={styles.miniTitle}>Contacto</div>
                <div className={styles.miniDesc}>Cuéntanos tu proyecto. Respondemos &lt; 24 h.</div>
              </div>
            </Link>
          </div>

          {/* Bloque de ayuda / CTA */}
          <aside className={styles.helpBox} aria-labelledby="t-ayuda">
            <div className={styles.helpIcon} aria-hidden>🤝</div>
            <div>
              <h2 id="t-ayuda" className={styles.h2}>¿Necesitas ayuda?</h2>
              <p className="small" style={{ margin: 0 }}>
                Escríbenos a <a href="mailto:contactanos@pinonet.me">contactanos@pinonet.me</a> o por{" "}
                <a href="https://wa.me/549541210879" target="_blank" rel="noopener noreferrer">
                  WhatsApp (+54 954 121 0879)
                </a>.
              </p>
            </div>
          </aside>

          <div className={styles.code}>Error 404 • PINONET</div>
        </div>
      </div>
    </section>
  );
}
