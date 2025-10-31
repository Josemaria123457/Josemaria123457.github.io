// app/page.tsx
export default function Page() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero" id="inscripciones">
        <div className="container wrap">
          <div>
            <span className="eyebrow">Idiomas • Tecnología • Certificación</span>
            <h1>Aprende Inglés, Francés e Informática con asesores certificados</h1>
            <p>
              Metodología comunicativa, grupos reducidos y rutas de certificación{" "}
              <strong>CeNNi</strong> respaldadas por <strong>SEP</strong>. Presencial y
              mixto.
            </p>

            <div className="badges">
              <span className="badge">Enfoque comunicativo</span>
              <span className="badge">Asesores certificados</span>
              <span className="badge">RVOE SEP</span>
            </div>

            <div className="cta">
              <a className="btn primary" href="#programas">Ver programas</a>
              <a className="btn" href="https://wa.me/529542061910" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>

            <div className="stats" role="list">
              <div className="stat" role="listitem"><b>10+ años</b><span className="small">de experiencia</span></div>
              <div className="stat" role="listitem"><b>2 sedes</b><span className="small">Tlaxiaco &amp; Pinotepa</span></div>
              <div className="stat" role="listitem"><b>CeNNi</b><span className="small">Centro aplicador</span></div>
              <div className="stat" role="listitem"><b>RVOE</b><span className="small">Programas con validez</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Programas ===== */}
      <section id="programas" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Programas académicos</h2>
            <p className="lead">Idiomas y tecnología para todas las etapas y objetivos.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Inglés general</h3>
                <p>Desde Fundamentals hasta Advanced. Alineado al MCER; preparación para certificaciones.</p>
                <span className="tag">Niños / Jóvenes / Adultos</span>
              </article>
              <article className="card">
                <h3>Francés</h3>
                <p>Desarrolla competencias comunicativas con acompañamiento experto y evaluación continua.</p>
                <span className="tag">A1–B2</span>
              </article>
              <article className="card">
                <h3>Informática e Innovación</h3>
                <p>Computación básica, Office, alfabetización digital y desarrollo web inicial.</p>
                <span className="tag">Habilidades tecnológicas</span>
              </article>
              <article className="card">
                <h3>SEPA Inglés</h3>
                <p>Programa reconocido para formación práctica y flexible.</p>
                <span className="tag">Sede ISIAMA</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Conócenos ===== */}
      <section id="conocenos" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Conócenos</h2>
            <p className="lead">
              Somos el <strong>Instituto Superior de Idiomas México Americana</strong>,
              con más de una década formando estudiantes en idiomas e innovación.
            </p>
            <div className="cols">
              <div className="card">
                <h3>Misión</h3>
                <p>
                  Brindar enseñanza de idiomas con enfoque comunicativo mediante experiencias
                  intuitivas y participativas, guiadas por asesores altamente calificados.
                </p>
              </div>
              <div className="card">
                <h3>Visión</h3>
                <p>
                  Ser líderes en enseñanza de idiomas y habilidades tecnológicas para impulsar
                  el desarrollo personal y profesional de nuestra comunidad.
                </p>
              </div>
              <div className="card">
                <h3>Valores</h3>
                <p>Amor • Respeto • Compromiso • Responsabilidad • Trabajo en equipo • Solidaridad • Confianza.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Metodología ===== */}
      <section id="metodo" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Metodología y ruta de aprendizaje</h2>
            <div className="timeline" role="list">
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>Diagnóstico inicial</strong><br /><span className="small">Ubicación por nivel y objetivos.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>Clase comunicativa</strong><br /><span className="small">Enfoque práctico: hablar, escuchar, leer y escribir.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>Evaluaciones parciales</strong><br /><span className="small">Retroalimentación constante para avanzar con confianza.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>Certificación</strong><br /><span className="small">Opcional con <b>CeNNi</b> y validez oficial.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Certificaciones ===== */}
      <section id="cert" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Certificaciones y RVOE</h2>
            <p className="lead">Programas con validez oficial y centro aplicador de exámenes.</p>
            <div className="badges">
              <span className="badge">RVOE SEP 16FT159 — Inglés</span>
              <span className="badge">RVOE SEP 16FT164 — Francés</span>
              {/*<span className="badge">RVOE SEP 16FT168 — Informática</span>*/}
              <span className="badge">Centro aplicador CeNNi</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonios ===== */}
      <section className="band-1 testi">
        <div className="container">
          <div className="surface alt">
            <h2>Lo que dicen nuestros estudiantes</h2>
            <div className="testi-track" aria-label="Testimonios" tabIndex={0}>
              <article className="card"><h3>María G.</h3><p>“La atención es excelente y las clases me ayudaron a hablar con seguridad.”</p><span className="tag">Inglés B1</span></article>
              <article className="card"><h3>Carlos R.</h3><p>“Certifiqué con CeNNi gracias a la preparación del instituto.”</p><span className="tag">Certificación</span></article>
              <article className="card"><h3>Itzel P.</h3><p>“El enfoque práctico hizo que avanzara muy rápido.”</p><span className="tag">Francés A2</span></article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sedes ===== */}
      <section id="sedes" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Nuestras sedes</h2>
            <div className="grid cards">
              <article className="card">
                <h3>Tlaxiaco</h3>
                <p className="small">
                  Tel: <a href="tel:+529542061910">(953) 239 7626</a> • WhatsApp:{" "}
                  <a href="https://wa.me/529542061910" target="_blank" rel="noopener">(953) 229 5158</a>
                </p>
                <p>Programas para niños, jóvenes y adultos. Horarios matutinos y vespertinos.</p>
              </article>
              <article className="card">
                <h3>Pinotepa Nacional</h3>
                <p className="small">Tel: <a href="tel:+529542061910">(954) 206 1910</a> • Calle Tercera Ote. 105, Centro, 71600</p>
                <p>programas mixtos y preparación a certificación.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contacto ===== */}
      <section id="contacto" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Contacto e inscripciones</h2>
            <p className="lead">Escríbenos y te ayudamos a elegir tu mejor ruta.</p>
            <div className="cols">
              <form className="card" id="form-contacto" action="mailto:isiama.20361ctlaxiaco@gmail.com" method="post">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" required autoComplete="name" />
                <label htmlFor="correo">Correo</label>
                <input id="correo" name="correo" type="email" required autoComplete="email" />
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} required />
                <button className="btn primary" type="submit">Enviar</button>
              </form>

              <div className="card">
                <h3>Datos de contacto</h3>
                <ul className="small" style={{ marginTop: "6px" }}>
                  <li>Correo: <a href="mailto:isiama.20361ctlaxiaco@gmail.com">isiama.20361ctlaxiaco@gmail.com</a></li>
                  <li>Correo: <a href="mailto:isiama.pinotepa.20361@gmail.com">isiama.pinotepa.20361@gmail.com</a></li>
                  <li>WhatsApp: <a href="https://wa.me/529532295158" target="_blank" rel="noopener">(953) 229 5158</a></li>
                  <li>Tel Tlaxiaco: <a href="tel:+529532397626">(953) 239 7626</a></li>
                  <li>Tel Pinotepa: <a href="tel:+529542061910">(954) 206 1910</a></li>
                </ul>
                <iframe
                  className="map"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=Calle%20Tercera%20Ote.%20105%2C%20Santiago%20Pinotepa%20Nacional%2C%20Oaxaca%2C%20M%C3%A9xico&output=embed"
                  title="Mapa de ubicación Pinotepa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
