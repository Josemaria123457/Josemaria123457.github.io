// app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container wrap">
          <div>
            <span className="eyebrow">Web performance • SEO • Conversión</span>
            <h1>
              Diseñamos páginas web <b>profesionales</b>, <b>rápidas</b> y optimizadas para resultados reales
            </h1>
            <p>
              Creamos páginas web, tiendas en línea y plataformas corporativas con un enfoque estratégico en rendimiento,
              posicionamiento y conversión.
            </p>

            <div className="badges">
              <span className="badge">SEO técnico</span>
              <span className="badge">WhatsApp & Análisis</span>
            </div>

            <div className="cta">
              <Link className="btn primary" href="/servicios">Ver planes</Link>
              <a className="btn" href="#contacto">Solicitar cotización</a>
            </div>

            <div className="stats" role="list" aria-label="Indicadores">
              <div className="stat" role="listitem"><b>7 días</b><span className="small">entrega rápida</span></div>
              <div className="stat" role="listitem"><b>+95</b><span className="small">performance</span></div>
              <div className="stat" role="listitem"><b>SSL</b><span className="small">y dominio</span></div>
              <div className="stat" role="listitem"><b>Soporte</b><span className="small">incluido</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Servicios</h2>
            <p className="lead">Paquetes diseñados para negocios locales, emprendedores y pequeñas o medianas empresas.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Paquete Estándar</h3>
                <p>
                  Creación de una página web básica con diseño personalizado, hasta 5 secciones
                  (inicio, servicios, contacto, galería, etc.), dominio personalizado y alojamiento inicial.
                </p>
                <span className="tag">Entrega desde 7 días</span>
                <span className="tag">Costo estimado: $1,500–$2,000 MXN</span>
              </article>

              <article className="card">
                <h3>Paquete Premium</h3>
                <p>
                  Incluye todo lo del paquete estándar más mantenimiento mensual, optimización SEO básica,
                  actualización de contenido y soporte técnico continuo.
                </p>
                <span className="tag">1–3 semanas</span>
                <span className="tag">Desde $3,000 MXN</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS (mitad imagen / mitad texto) */}
      <section id="quienes-somos" className="band-2">
        <div className="container">
          <div
            className="surface"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            {/* Columna izquierda: IMAGEN */}
            <div
              style={{
                flex: "1 1 360px",
                minHeight: "340px",
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1400&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.95)",
                borderRadius: "20px",
              }}
              role="img"
              aria-label="Equipo PINONET trabajando en diseño y desarrollo web"
            />

            {/* Columna derecha: TEXTO */}
            <article
              style={{
                flex: "1 1 360px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <span className="eyebrow">Equipo de trabajo PINONET desarrollando sitios web</span>
              <h2 className="text-3xl font-bold" style={{ color: "var(--accent, #60a5fa)", marginBottom: "12px" }}>
                Quiénes somos
              </h2>

              <p className="lead" style={{ marginBottom: 12 }}>
                En <strong>PINONET</strong> combinamos <em>diseño, tecnología y estrategia</em> para construir
                sitios web <b>profesionales, rápidos y optimizados</b> que impulsan resultados reales.
              </p>
              <p style={{ opacity: 0.85 }}>
                Nuestro equipo trabaja con pasión y precisión para ofrecer rendimiento, seguridad y una
                presencia digital que destaca.
              </p>

              <div style={{ marginTop: 20 }}>
                <Link className="btn primary" href="https://www.pinonet.me/conocenos" aria-label="Ir a la página Conócenos">
                  Conócenos más
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Nuestro proceso</h2>
            <div className="timeline" role="list" aria-label="Pasos del proceso">
              <div className="step" role="listitem">
                <span className="dot" aria-hidden="true"></span>
                <div><strong>1. Análisis (Brief)</strong><br /><span className="small">Definimos objetivos, referencias visuales y contenido principal.</span></div>
              </div>
              <div className="step" role="listitem">
                <span className="dot" aria-hidden="true"></span>
                <div><strong>2. Prototipo</strong><br /><span className="small">Elaboramos el diseño inicial (wireframe) y la propuesta visual.</span></div>
              </div>
              <div className="step" role="listitem">
                <span className="dot" aria-hidden="true"></span>
                <div><strong>3. Desarrollo</strong><br /><span className="small">Construcción del sitio web con diseño adaptable, SEO técnico y analítica integrada.</span></div>
              </div>
              <div className="step" role="listitem">
                <span className="dot" aria-hidden="true"></span>
                <div><strong>4. Lanzamiento</strong><br /><span className="small">Entrega final con dominio, certificado SSL y seguimiento posterior.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Portafolio</h2>
            <p className="lead">Algunos diseños que hemos entregado.</p>

            {(() => {
              const proyectos = [
                {
                  titulo: "Alianza MA",
                  slug: "https://alianzama.edu.mx",
                  img: "/proyectos/miniaturas/alianzama.png",
                  excerpt: "Sitio web para una institución educativa.",
                },
                {
                  titulo: "",
                  slug: "",
                  img: "",
                  excerpt: "",
                },
              ];

              return (
                <div className="grid cards">
                  {proyectos.map((p) => {
                    const isExternal = p.slug.startsWith("http");
                    const content = (
                      <article className="card portfolio-card">
                        <img className="thumb" src={p.img} alt={p.titulo} loading="lazy" />
                        <h3>{p.titulo}</h3>
                        <p>{p.excerpt}</p>
                      </article>
                    );

                    return isExternal ? (
                      <a
                        key={p.slug}
                        href={p.slug}
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link key={p.slug} href={p.slug} className="card-link">
                        {content}
                      </Link>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </section>


      {/* PLANES */}
      <section id="planes" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Planes y precios</h2>
            <p className="lead">Facturación en MXN. Personalizamos cualquier plan.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Paquete Estándar</h3>
                <p>$1,500–$2,000 MXN</p>
                <ul className="small">
                  <li>Hasta 5 secciones</li>
                  <li>Diseño personalizado</li>
                  <li>Dominio personalizado</li>
                  <li>Alojamiento inicial</li>
                </ul>
              </article>
              <article className="card">
                <h3>Paquete Premium</h3>
                <p>Desde $3,000 MXN</p>
                <ul className="small">
                  <li>Mantenimiento mensual</li>
                  <li>Optimización SEO básica</li>
                  <li>Actualización de contenido</li>
                  <li>Soporte técnico continuo</li>
                </ul>
              </article>
            </div>
            <p className="small" style={{ marginTop: 8 }}>
              Costos estimados: pueden variar según alcance y requerimientos del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section id="por-que-elegirnos" className="band-2">
        <div className="container">
          <div
            className="surface"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            {/* Columna izquierda: IMAGEN */}
            <div
              style={{
                flex: "1 1 360px",
                minHeight: "340px",
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.95)",
                borderRadius: "20px",
              }}
              role="img"
              aria-label="Clientes satisfechos con los servicios web de PINONET"
            />

            {/* Columna derecha: TEXTO */}
            <article
              style={{
                flex: "1 1 360px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <span className="eyebrow">Confianza, calidad y resultados</span>
              <h2 className="text-3xl font-bold" style={{ color: "var(--accent, #3b82f6)", marginBottom: "12px" }}>
                ¿Por qué elegirnos?
              </h2>

              <p className="lead" style={{ marginBottom: 12 }}>
                En <strong>PINONET</strong> entendemos que tu sitio web es más que una
                página: es la puerta de entrada a tu negocio. Por eso cada proyecto se
                diseña con <b>enfoque en resultados, velocidad y confianza.</b>
              </p>

              <ul style={{ marginBottom: 12, opacity: 0.9 }}>
                <li>🚀 Optimización total: velocidad y rendimiento superiores</li>
                <li>🎯 Enfoque en conversión: diseño pensado para vender</li>
                <li>🔒 Seguridad y SEO técnico integrados</li>
                <li>💬 Acompañamiento personalizado en cada etapa</li>
              </ul>

              <div style={{ marginTop: 20 }}>
                <Link className="btn primary" href="/por-que-elegirnos">
                  Saber más
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Preguntas frecuentes</h2>
            <div className="grid">
              <article className="card">
                <h3>¿Qué necesito para empezar?</h3>
                <p>
                  Únicamente requerimos su logotipo y contenido básico.<br />
                  Si aún no los tiene, lo asesoramos paso a paso para elaborarlos.
                </p>
              </article>
              <article className="card">
                <h3>¿Incluye SEO?</h3>
                <p>
                  Sí. Todos los planes incluyen optimización técnica inicial, que abarca metadatos,<br />
                  mapa del sitio (sitemap), etiquetas OG y configuraciones básicas de rendimiento.
                </p>
              </article>
              <article className="card">
                <h3>¿Cuál es el tiempo de entrega?</h3>
                <p>
                  Las páginas de aterrizaje (landing) se entregan en un promedio de 7 días hábiles.<br />
                  Los sitios web más amplios se completan en un plazo aproximado de 2 a 3 semanas.
                </p>
              </article>
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
                action="https://formsubmit.co/cotactanos@pinonet.me"
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
