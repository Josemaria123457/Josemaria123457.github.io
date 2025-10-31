export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container wrap">
          <div>
            <span className="eyebrow">Web performance • SEO • Conversión</span>
            <h1>Diseñamos páginas web <b>rápidas</b> y enfocadas a <b>ventas</b></h1>
            <p>Landing pages, sitios corporativos y e-commerce inicial. Dominio, hosting y analítica listos para producción.</p>

            <div className="badges">
              <span className="badge">Core Web Vitals 90+</span>
              <span className="badge">SEO técnico</span>
              <span className="badge">WhatsApp & Analytics</span>
            </div>

            <div className="cta">
              <a className="btn primary" href="#planes">Ver planes</a>
              <a className="btn" href="#contacto">Cotiza</a>
            </div>

            <div className="stats" role="list">
              <div className="stat" role="listitem"><b>7 días</b><span className="small">landing lista</span></div>
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
            <p className="lead">Paquetes pensados para negocio local, emprendimientos y pymes.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Landing de alto impacto</h3>
                <p>Una página que vende: mensajes claros, CTA, WhatsApp y métricas.</p>
                <span className="tag">Entrega desde 7 días</span>
              </article>
              <article className="card">
                <h3>Sitio 3–5 secciones</h3>
                <p>Inicio, servicios, sobre nosotros, contacto y blog opcional.</p>
                <span className="tag">SEO + rendimiento</span>
              </article>
              <article className="card">
                <h3>E-commerce inicial</h3>
                <p>Catálogo básico, checkout externo y capacitación corta.</p>
                <span className="tag">Escalable</span>
              </article>
              <article className="card">
                <h3>Rediseño & migración</h3>
                <p>Migramos desde Wix/WordPress a un sitio moderno y veloz.</p>
                <span className="tag">Sin caídas</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Nuestro proceso</h2>
            <div className="timeline" role="list">
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>1. Brief</strong><br /><span className="small">Objetivos, referencias y contenido.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>2. Prototipo</strong><br /><span className="small">Wireframe y propuesta visual.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>3. Desarrollo</strong><br /><span className="small">Responsive, SEO y analítica.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>4. Lanzamiento</strong><br /><span className="small">Dominio, SSL y seguimiento.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO (placeholders) */}
      <section id="portafolio" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Portafolio</h2>
            <p className="lead">Algunos diseños que hemos entregado.</p>
            <div className="grid cards">
              {[1,2,3,4,5,6].map((n)=>(
                <article key={n} className="card">
                  <div style={{aspectRatio:"16/10", background:"#0b1420", borderRadius:"12px", marginBottom:"10px"}} />
                  <h3>Proyecto #{n}</h3>
                  <p>Landing orientada a conversión.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Planes y precios</h2>
            <p className="lead">Facturación en MXN. Personalizamos cualquier plan.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Landing</h3>
                <p>$4,900 MXN</p>
                <ul className="small">
                  <li>1 sección</li><li>WhatsApp/CTA</li><li>SEO base</li><li>1 mes de soporte</li>
                </ul>
              </article>
              <article className="card">
                <h3>Negocio</h3>
                <p>$9,900 MXN</p>
                <ul className="small">
                  <li>3–5 secciones</li><li>Analítica + eventos</li><li>2 meses soporte</li><li>Dominio + hosting*</li>
                </ul>
              </article>
              <article className="card">
                <h3>E-commerce inicial</h3>
                <p>$14,900 MXN</p>
                <ul className="small">
                  <li>Catálogo básico</li><li>Checkout externo</li><li>Capacitación</li><li>3 meses soporte</li>
                </ul>
              </article>
            </div>
            <p className="small" style={{marginTop:8}}>*Dominio y hosting incluidos el primer año en planes Negocio/E-commerce.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Preguntas frecuentes</h2>
            <div className="grid">
              <article className="card"><h3>¿Qué necesito para empezar?</h3><p>Logo y contenido básico. Si no lo tienes, te guiamos.</p></article>
              <article className="card"><h3>¿Incluye SEO?</h3><p>SEO técnico inicial (metadatos, sitemap, OG, rendimiento).</p></article>
              <article className="card"><h3>¿Tiempo de entrega?</h3><p>Desde 7 días hábiles una landing; 2–3 semanas sitios mayores.</p></article>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Hablemos de tu proyecto</h2>
            <p className="lead">Cuéntanos objetivos y tiempos. Te proponemos la mejor ruta.</p>
            <div className="cols">
              <form className="card" id="form-contacto" action="https://formsubmit.co/hola@pinonet.me" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" required autoComplete="name" />
                <label htmlFor="correo">Correo</label>
                <input id="correo" name="correo" type="email" required autoComplete="email" />
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} required />
                <button className="btn primary" type="submit">Enviar</button>
              </form>

              <div className="card">
                <h3>Contacto directo</h3>
                <ul className="small" style={{ marginTop: "6px" }}>
                  <li>Email: <a href="mailto:hola@pinonet.me">hola@pinonet.me</a></li>
                  <li>WhatsApp: <a href="https://wa.me/529532295158" target="_blank" rel="noopener">(953) 229 5158</a></li>
                </ul>
                <div className="small" style={{marginTop:12}}>Atendemos en Oaxaca y de forma remota a todo México.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
