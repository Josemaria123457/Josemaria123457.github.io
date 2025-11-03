import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className="band-2" aria-labelledby="t-404">
      <div className="container">
        <div className={`surface ${styles.box}`}>
          {/* Decorativo */}
          <div className={styles.illustration} aria-hidden>
            <svg viewBox="0 0 200 200" width="140" height="140">
              <defs>
                <radialGradient id="g" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#g)" />
              <g stroke="#2b3a57" strokeWidth="2" strokeLinecap="round">
                <path d="M70 70 L130 130" />
                <path d="M130 70 L70 130" />
              </g>
            </svg>
          </div>

          <h1 id="t-404" className={styles.title}>Página no encontrada</h1>
          <p className="lead" style={{ opacity: .9 }}>
            La ruta que intentaste abrir no existe o cambió de lugar. Revisa la URL o vuelve a una sección conocida.
          </p>

          {/* Acciones principales */}
          <div className={styles.actions}>
            <Link className="btn primary" href="/">Ir al inicio</Link>
            <Link className="btn" href="/servicios">Ver servicios</Link>
            <a className="btn" href="#contacto">Contactar soporte</a>
          </div>

          {/* Búsqueda rápida (no funcional, de muestra) */}
          <form
            className={styles.search}
            role="search"
            aria-label="Buscar contenido"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className={styles.input}
              placeholder="Buscar: servicios, planes, portafolio…"
              aria-label="Buscar"
            />
            <button className={`btn ${styles.searchBtn}`} type="submit">Buscar</button>
          </form>

          {/* Enlaces útiles */}
          <div className={styles.quicklinks} aria-label="Rutas útiles">
            <Link className={styles.quick} href="/#servicios">Explorar servicios</Link>
            <Link className={styles.quick} href="/#planes">Ver planes y precios</Link>
            <Link className={styles.quick} href="/#portafolio">Portafolio</Link>
            <Link className={styles.quick} href="/#faq">Preguntas frecuentes</Link>
          </div>

          {/* Contacto directo */}
          <div className={styles.help}>
            <p className="small">
              ¿Necesitas ayuda? Escríbenos a{" "}
              <a href="mailto:contactanos@pinonet.me">contactanos@pinonet.me</a> o por{" "}
              <a href="https://wa.me/549541210879" target="_blank" rel="noopener">WhatsApp (+54 954 121 0879)</a>.
            </p>
          </div>

          <div className={styles.code}>Error 404 • PINONET</div>
        </div>
      </div>
    </section>
  );
}
